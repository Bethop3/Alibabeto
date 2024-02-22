import type { Sequelize } from "sequelize";
import { Categoria as _Categoria } from "./categoria";
import type { CategoriaAttributes, CategoriaCreationAttributes } from "./categoria";
import { EntradaHasProducto as _EntradaHasProducto } from "./entrada_has_producto";
import type { EntradaHasProductoAttributes, EntradaHasProductoCreationAttributes } from "./entrada_has_producto";
import { Entrada as _Entrada } from "./entrada";
import type { EntradaAttributes, EntradaCreationAttributes } from "./entrada";
import { Producto as _Producto } from "./producto";
import type { ProductoAttributes, ProductoCreationAttributes } from "./producto";
import { Proveedore as _Proveedore } from "./proveedore";
import type { ProveedoreAttributes, ProveedoreCreationAttributes } from "./proveedore";
import { Role as _Role } from "./role";
import type { RoleAttributes, RoleCreationAttributes } from "./role";
import { Usuario as _Usuario } from "./usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./usuario";

export {
  _Categoria as Categoria,
  _EntradaHasProducto as EntradaHasProducto,
  _Entrada as Entrada,
  _Producto as Producto,
  _Proveedore as Proveedore,
  _Role as Role,
  _Usuario as Usuario,
};

export type {
  CategoriaAttributes,
  CategoriaCreationAttributes,
  EntradaHasProductoAttributes,
  EntradaHasProductoCreationAttributes,
  EntradaAttributes,
  EntradaCreationAttributes,
  ProductoAttributes,
  ProductoCreationAttributes,
  ProveedoreAttributes,
  ProveedoreCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Categoria = _Categoria.initModel(sequelize);
  const EntradaHasProducto = _EntradaHasProducto.initModel(sequelize);
  const Entrada = _Entrada.initModel(sequelize);
  const Producto = _Producto.initModel(sequelize);
  const Proveedore = _Proveedore.initModel(sequelize);
  const Role = _Role.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);

  Producto.belongsTo(Categoria, { as: "CategoriaFK_categoria", foreignKey: "CategoriaFK"});
  Categoria.hasMany(Producto, { as: "productos", foreignKey: "CategoriaFK"});
  EntradaHasProducto.belongsTo(Entrada, { as: "Entrada", foreignKey: "EntradaId"});
  Entrada.hasMany(EntradaHasProducto, { as: "entrada_has_productos", foreignKey: "EntradaId"});
  EntradaHasProducto.belongsTo(Producto, { as: "Producto", foreignKey: "ProductoId"});
  Producto.hasMany(EntradaHasProducto, { as: "entrada_has_productos", foreignKey: "ProductoId"});
  Entrada.belongsTo(Producto, { as: "ProductoFK_producto", foreignKey: "ProductoFK"});
  Producto.hasMany(Entrada, { as: "entradas", foreignKey: "ProductoFK"});
  Entrada.belongsTo(Proveedore, { as: "ProveedorFK_proveedore", foreignKey: "ProveedorFK"});
  Proveedore.hasMany(Entrada, { as: "entradas", foreignKey: "ProveedorFK"});
  Usuario.belongsTo(Role, { as: "RolFK_role", foreignKey: "RolFK"});
  Role.hasMany(Usuario, { as: "usuarios", foreignKey: "RolFK"});
  Entrada.belongsTo(Usuario, { as: "UsuarioFK_usuario", foreignKey: "UsuarioFK"});
  Usuario.hasMany(Entrada, { as: "entradas", foreignKey: "UsuarioFK"});

  return {
    Categoria: Categoria,
    EntradaHasProducto: EntradaHasProducto,
    Entrada: Entrada,
    Producto: Producto,
    Proveedore: Proveedore,
    Role: Role,
    Usuario: Usuario,
  };
}
