import type { Sequelize } from 'sequelize'
import { Carrito as _Carrito } from './carrito'
import type { CarritoAttributes, CarritoCreationAttributes } from './carrito'
import { Categoria as _Categoria } from './categoria'
import type { CategoriaAttributes, CategoriaCreationAttributes } from './categoria'
import { DireccionEntrega as _DireccionEntrega } from './direccion_entrega'
import type { DireccionEntregaAttributes, DireccionEntregaCreationAttributes } from './direccion_entrega'
import { EntradaHasProducto as _EntradaHasProducto } from './entrada_has_producto'
import type { EntradaHasProductoAttributes, EntradaHasProductoCreationAttributes } from './entrada_has_producto'
import { Entrada as _Entrada } from './entrada'
import type { EntradaAttributes, EntradaCreationAttributes } from './entrada'
import { Estadopedido as _Estadopedido } from './estadopedido'
import type { EstadopedidoAttributes, EstadopedidoCreationAttributes } from './estadopedido'
import { PedidoHasProducto as _PedidoHasProducto } from './pedido_has_producto'
import type { PedidoHasProductoAttributes, PedidoHasProductoCreationAttributes } from './pedido_has_producto'
import { Pedido as _Pedido } from './pedido'
import type { PedidoAttributes, PedidoCreationAttributes } from './pedido'
import { Producto as _Producto } from './producto'
import type { ProductoAttributes, ProductoCreationAttributes } from './producto'
import { Proveedore as _Proveedore } from './proveedore'
import type { ProveedoreAttributes, ProveedoreCreationAttributes } from './proveedore'
import { Role as _Role } from './role'
import type { RoleAttributes, RoleCreationAttributes } from './role'
import { Status as _Status } from './status'
import type { StatusAttributes, StatusCreationAttributes } from './status'
import { UserSession as _UserSession } from './user_session'
import type { UserSessionAttributes, UserSessionCreationAttributes } from './user_session'
import { Usuario as _Usuario } from './usuario'
import type { UsuarioAttributes, UsuarioCreationAttributes } from './usuario'

export {
  _Carrito as Carrito,
  _Categoria as Categoria,
  _DireccionEntrega as DireccionEntrega,
  _EntradaHasProducto as EntradaHasProducto,
  _Entrada as Entrada,
  _Estadopedido as Estadopedido,
  _PedidoHasProducto as PedidoHasProducto,
  _Pedido as Pedido,
  _Producto as Producto,
  _Proveedore as Proveedore,
  _Role as Role,
  _Status as Status,
  _UserSession as UserSession,
  _Usuario as Usuario
}

export type {
  CarritoAttributes,
  CarritoCreationAttributes,
  CategoriaAttributes,
  CategoriaCreationAttributes,
  DireccionEntregaAttributes,
  DireccionEntregaCreationAttributes,
  EntradaHasProductoAttributes,
  EntradaHasProductoCreationAttributes,
  EntradaAttributes,
  EntradaCreationAttributes,
  EstadopedidoAttributes,
  EstadopedidoCreationAttributes,
  PedidoHasProductoAttributes,
  PedidoHasProductoCreationAttributes,
  PedidoAttributes,
  PedidoCreationAttributes,
  ProductoAttributes,
  ProductoCreationAttributes,
  ProveedoreAttributes,
  ProveedoreCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  StatusAttributes,
  StatusCreationAttributes,
  UserSessionAttributes,
  UserSessionCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes
}

export function initModels (sequelize: Sequelize) {
  const Carrito = _Carrito.initModel(sequelize)
  const Categoria = _Categoria.initModel(sequelize)
  const DireccionEntrega = _DireccionEntrega.initModel(sequelize)
  const EntradaHasProducto = _EntradaHasProducto.initModel(sequelize)
  const Entrada = _Entrada.initModel(sequelize)
  const Estadopedido = _Estadopedido.initModel(sequelize)
  const PedidoHasProducto = _PedidoHasProducto.initModel(sequelize)
  const Pedido = _Pedido.initModel(sequelize)
  const Producto = _Producto.initModel(sequelize)
  const Proveedore = _Proveedore.initModel(sequelize)
  const Role = _Role.initModel(sequelize)
  const Status = _Status.initModel(sequelize)
  const UserSession = _UserSession.initModel(sequelize)
  const Usuario = _Usuario.initModel(sequelize)

  Producto.belongsTo(Categoria, { as: 'categorium', foreignKey: 'categoriaID' })
  Categoria.hasMany(Producto, { as: 'productos', foreignKey: 'categoriaID' })
  Pedido.belongsTo(DireccionEntrega, { as: 'direccionEntrega', foreignKey: 'direccionEntregaID' })
  DireccionEntrega.hasMany(Pedido, { as: 'pedidos', foreignKey: 'direccionEntregaID' })
  PedidoHasProducto.belongsTo(Estadopedido, { as: 'estadoProducto', foreignKey: 'estadoProductoID' })
  Estadopedido.hasMany(PedidoHasProducto, { as: 'pedido_has_productos', foreignKey: 'estadoProductoID' })
  Pedido.belongsTo(Estadopedido, { as: 'estadoPedido', foreignKey: 'estadoPedidoID' })
  Estadopedido.hasMany(Pedido, { as: 'pedidos', foreignKey: 'estadoPedidoID' })
  PedidoHasProducto.belongsTo(Pedido, { as: 'pedido', foreignKey: 'pedidoID' })
  Pedido.hasMany(PedidoHasProducto, { as: 'pedido_has_productos', foreignKey: 'pedidoID' })
  Carrito.belongsTo(Producto, { as: 'producto', foreignKey: 'productoID' })
  Producto.hasMany(Carrito, { as: 'carritos', foreignKey: 'productoID' })
  Entrada.belongsTo(Producto, { as: 'ProductoFK_producto', foreignKey: 'ProductoFK' })
  Producto.hasMany(Entrada, { as: 'entradas', foreignKey: 'ProductoFK' })
  PedidoHasProducto.belongsTo(Producto, { as: 'producto', foreignKey: 'productoID' })
  Producto.hasMany(PedidoHasProducto, { as: 'pedido_has_productos', foreignKey: 'productoID' })
  Entrada.belongsTo(Proveedore, { as: 'ProveedorFK_proveedore', foreignKey: 'ProveedorFK' })
  Proveedore.hasMany(Entrada, { as: 'entradas', foreignKey: 'ProveedorFK' })
  Usuario.belongsTo(Role, { as: 'Rol', foreignKey: 'RolID' })
  Role.hasMany(Usuario, { as: 'usuarios', foreignKey: 'RolID' })
  Carrito.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioID' })
  Usuario.hasMany(Carrito, { as: 'carritos', foreignKey: 'usuarioID' })
  DireccionEntrega.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioId' })
  Usuario.hasMany(DireccionEntrega, { as: 'direccion_entregas', foreignKey: 'usuarioId' })
  Entrada.belongsTo(Usuario, { as: 'UsuarioFK_usuario', foreignKey: 'UsuarioFK' })
  Usuario.hasMany(Entrada, { as: 'entradas', foreignKey: 'UsuarioFK' })
  Pedido.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioID' })
  Usuario.hasMany(Pedido, { as: 'pedidos', foreignKey: 'usuarioID' })

  return {
    Carrito,
    Categoria,
    DireccionEntrega,
    EntradaHasProducto,
    Entrada,
    Estadopedido,
    PedidoHasProducto,
    Pedido,
    Producto,
    Proveedore,
    Role,
    Status,
    UserSession,
    Usuario
  }
}
