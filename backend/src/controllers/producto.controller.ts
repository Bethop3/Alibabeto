import { type ProductosQuery, type CrearProducto, type EditarProducto, type ProductoPorIdResponse, type ProductoQueryResponse } from '../types/producto'
import { Producto, type ProductoAttributes } from '../models/producto'
import { type Controller } from '../types'
import { Op, type Order, QueryTypes } from 'sequelize'
import { Categoria } from '../models/categoria'
import { sequelize } from '../database'
import { ImagenesProducto } from '../models/imagenes_producto'

const MAX_ELEMENTS = 16

// Controlador para obtener todos los productos
export const GetProductosByQuery: Controller<ProductoQueryResponse, any, null, null, ProductosQuery> = async (req, res) => {
  try {
    let {
      nombre,
      categoria,
      precioMaximo,
      categoriaID,
      landing,
      pagina,
      orden
    } = req.query

    let limit
    let offset

    const orderBy: Order = [

    ]
    // Consulta todos los productos en la base de datos
    console.log('req.query')
    console.log(req.query)

    nombre = nombre ?? ''

    let whereClause: any = {
      descripcion: {
        [Op.like]: `%${nombre}%`
      },
      is_deleted: 0
    }

    if (categoria !== undefined) {
      whereClause.categoriaID = {
        [Op.eq]: Number(categoria)
      }
    }

    if (precioMaximo !== undefined) {
      whereClause.precio = {
        [Op.lte]: precioMaximo
      }
    }

    // debugger

    if (categoriaID !== undefined) {
      whereClause.categoriaID = {
        [Op.eq]: categoriaID
      }
    }

    if (pagina !== undefined) {
      limit = MAX_ELEMENTS
      offset = (Number(pagina) - 1) * MAX_ELEMENTS
    }

    switch (orden) {
      case 'id':
        console.log('orden')
        console.log(orden)
        orderBy.push(['id', 'DESC'])
        break
      default:
        console.log('por defecto')
        orderBy.push(['id', 'ASC'])
        break
    }

    console.log('orderBy')
    console.log(orderBy)

    if (landing !== undefined) {
      limit = 8
      whereClause = {
        categoriaID: {
          [Op.eq]: Number(categoria)
        },
        is_deleted: 0
      }
      console.log('whereClause')
      console.log(whereClause)
    }

    const totalProductos = await Producto.count({
      where: whereClause
    })

    const productos = await Producto.findAll({
      limit,
      offset,
      where: whereClause,
      order: orderBy,
      // order: [
      //   ['id', 'ASC']
      // ],
      attributes: { exclude: ['CreatedDate', 'categoriaID', 'is_deleted'] },
      include: [
        {
          model: Categoria, // El modelo de la tabla relacionada
          as: 'categorium' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
      // where: {
      //   descripcion: {
      //     [Op.like]: `%${nombre}%`
      //   },
      //   precio: {
      //     [Op.lte]: Number(precioMaximo)
      //   }
      // }
    })

    const totalPaginas = Math.ceil(totalProductos / MAX_ELEMENTS)

    // Retorna la respuesta con los productos en formato JSON
    return res.status(200).json({
      ok: true,
      data: {
        productos,
        totalPaginas
      }
    })
  } catch (err) {
    // En caso de error, imprime el error en la consola y retorna un código de estado 400
    console.log(err)
    return res.status(400).json()
  }
}

// Controlador para crear un nuevo producto
export const CrearProductoC: Controller<ProductoAttributes, CrearProducto> = async (req, res) => {
  try {
    const producto = req.body

    const productoExistente = await Producto.findOne({
      where: {
        codigo: producto.codigo
      }
    })

    // si ya existe el producto
    if (productoExistente) {
      return res.status(400).json({
        ok: false,
        msg: 'Codigo ya existente'
      })
    }

    // Crea un nuevo producto utilizando los datos del cuerpo de la solicitud
    const productoNuevo = await Producto.create({
      ...producto,
      status: 0,
      CreatedDate: new Date(),
      is_deleted: false
    })

    // Retorna la respuesta con el producto recién creado en formato JSON
    return res.status(200).json({
      ok: true,
      data: productoNuevo
    })
  } catch (err) {
    // En caso de error, imprime el error en la consola y retorna un código de estado 400
    console.log(err)
    return res.status(400).json()
  }
}

// export const agregarComentarioProducto: Controller<any> = async (req, res) => {
//   try {

//   } catch (error) {

//   }
// }

// Controlador para editar un producto existente
export const EditarProductoCtrl: Controller<ProductoAttributes | null, EditarProducto> = async (
  req,
  res
) => {
  try {
    // Extrae el 'id' y el resto de los datos del cuerpo de la solicitud
    const { id, ...rest } = req.body

    // Busca el producto a editar por su 'id'
    const productoAEditar = await Producto.findOne({
      where: { id }
    })

    // Verifica si el producto existe
    if (!productoAEditar) {
      return res.status(400).json({
        ok: false,
        msg: 'Producto inválido',
        data: null
      })
    }

    // Actualiza los atributos del producto con los datos del cuerpo de la solicitud
    productoAEditar.set({
      ...rest
    })

    console.log('rest.imagenesRemove')
    console.log(rest.imagenesRemove)

    for (const imagen of rest.imagenes) {
      await ImagenesProducto.create({
        productoID: productoAEditar.id,
        url: imagen
      })
    }
    for (const imagen of rest.imagenesRemove) {
      const imagenABorrar = await ImagenesProducto.findOne({
        where: {
          id: imagen
        }
      })

      await imagenABorrar?.destroy()
    }

    // productoAEditar.imagenes_productos.push()

    // Guarda los cambios en el producto
    await productoAEditar.save()

    // Retorna la respuesta con el producto editado en formato JSON
    return res.status(200).json({
      ok: true,
      data: productoAEditar,
      msg: 'Producto actualizado correctamente'
    })
  } catch (err) {
    // En caso de error, imprime el error en la consola y retorna un código de estado 400
    console.log(err)
    return res.status(400).json()
  }
}

// Controlador para eliminar un producto
export const EliminarProductoCtrl: Controller<string | null, number, any, { id: string }> = async (
  req,
  res
) => {
  try {
    // Extrae el 'id' de los parámetros de la solicitud
    const { id } = req.params

    // Busca el producto a eliminar por su 'id'
    const productoAEliminar = await Producto.findOne({
      where: {
        id,
        is_deleted: 0
      }
    })

    // Verifica si el producto existe
    if (!productoAEliminar) {
      return res.status(400).json({
        ok: false,
        msg: 'Producto inválido',
        data: null
      })
    }

    // Elimina el producto de la base de datos

    productoAEliminar.set({
      is_deleted: true
    })

    await productoAEliminar.save()

    // Retorna la respuesta con un mensaje de éxito en formato JSON
    return res.status(200).json({
      ok: true,
      data: null,
      msg: 'Producto eliminado correctamente'
    })
  } catch (err) {
    // En caso de error, imprime el error en la consola y retorna un código de estado 400
    console.log(err)
    return res.status(400).json()
  }
}

export const ObtenerProductoidctrl: Controller <ProductoPorIdResponse | null, number, any, { id: string }> = async (req, res) => {
  try {
    const { id } = req.params

    const productoABuscar = await Producto.findOne({
      where: { id, is_deleted: 0 },
      include: [
        {
          model: ImagenesProducto, // El modelo de la tabla relacionada
          as: 'imagenes_productos' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ],
      attributes: {
        include: [
          'codigo',
          'descripcion',
          'existencias',
          'id',
          'imagen',
          'precio',
          'titulo'
        ],
        exclude: [
          'CreatedDate',
          'is_deleted',
          'status'
        ]
      }
    })

    if (!productoABuscar) {
      return res.status(400).json({
        ok: false,
        msg: 'Producto no encontrado',
        data: null
      })
    }

    const categoria = productoABuscar.categoriaID

    console.log('productoABuscar')
    console.log(productoABuscar)

    const productosRelacionados = await sequelize?.query<Producto>(`
      SELECT * FROM productos 
      WHERE categoriaID = ${categoria}
      ORDER BY RAND() LIMIT 4;
  `, { type: QueryTypes.SELECT })

    return res.status(200).json({
      ok: true,
      data: {
        producto: productoABuscar,
        productosRelacionados
      }
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      ok: false,
      data: null
    })
  }
}
