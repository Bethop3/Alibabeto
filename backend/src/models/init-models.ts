import type { Sequelize } from "sequelize";
import { categorias as _categorias } from "./categorias";
import type { categoriasAttributes, categoriasCreationAttributes } from "./categorias";
import { entrada_has_producto as _entrada_has_producto } from "./entrada_has_producto";
import type { entrada_has_productoAttributes, entrada_has_productoCreationAttributes } from "./entrada_has_producto";
import { entradas as _entradas } from "./entradas";
import type { entradasAttributes, entradasCreationAttributes } from "./entradas";
import { productos as _productos } from "./productos";
import type { productosAttributes, productosCreationAttributes } from "./productos";
import { proveedores as _proveedores } from "./proveedores";
import type { proveedoresAttributes, proveedoresCreationAttributes } from "./proveedores";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { usuarios as _usuarios } from "./usuarios";
import type { usuariosAttributes, usuariosCreationAttributes } from "./usuarios";

export {
  _categorias as categorias,
  _entrada_has_producto as entrada_has_producto,
  _entradas as entradas,
  _productos as productos,
  _proveedores as proveedores,
  _roles as roles,
  _usuarios as usuarios,
};

export type {
  categoriasAttributes,
  categoriasCreationAttributes,
  entrada_has_productoAttributes,
  entrada_has_productoCreationAttributes,
  entradasAttributes,
  entradasCreationAttributes,
  productosAttributes,
  productosCreationAttributes,
  proveedoresAttributes,
  proveedoresCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  usuariosAttributes,
  usuariosCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const categorias = _categorias.initModel(sequelize);
  const entrada_has_producto = _entrada_has_producto.initModel(sequelize);
  const entradas = _entradas.initModel(sequelize);
  const productos = _productos.initModel(sequelize);
  const proveedores = _proveedores.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const usuarios = _usuarios.initModel(sequelize);

  productos.belongsTo(categorias, { as: "CategoriaFK_categoria", foreignKey: "CategoriaFK"});
  categorias.hasMany(productos, { as: "productos", foreignKey: "CategoriaFK"});
  entrada_has_producto.belongsTo(entradas, { as: "Entrada", foreignKey: "EntradaId"});
  entradas.hasMany(entrada_has_producto, { as: "entrada_has_productos", foreignKey: "EntradaId"});
  entrada_has_producto.belongsTo(productos, { as: "Producto", foreignKey: "ProductoId"});
  productos.hasMany(entrada_has_producto, { as: "entrada_has_productos", foreignKey: "ProductoId"});
  entradas.belongsTo(productos, { as: "ProductoFK_producto", foreignKey: "ProductoFK"});
  productos.hasMany(entradas, { as: "entradas", foreignKey: "ProductoFK"});
  entradas.belongsTo(proveedores, { as: "ProveedorFK_proveedore", foreignKey: "ProveedorFK"});
  proveedores.hasMany(entradas, { as: "entradas", foreignKey: "ProveedorFK"});
  usuarios.belongsTo(roles, { as: "RolFK_role", foreignKey: "RolFK"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "RolFK"});
  entradas.belongsTo(usuarios, { as: "UsuarioFK_usuario", foreignKey: "UsuarioFK"});
  usuarios.hasMany(entradas, { as: "entradas", foreignKey: "UsuarioFK"});

  return {
    categorias: categorias,
    entrada_has_producto: entrada_has_producto,
    entradas: entradas,
    productos: productos,
    proveedores: proveedores,
    roles: roles,
    usuarios: usuarios,
  };
}
