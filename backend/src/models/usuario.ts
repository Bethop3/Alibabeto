import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Carrito, CarritoId } from './carrito'
import type { DireccionEntrega, DireccionEntregaId } from './direccion_entrega'
import type { Entrada, EntradaId } from './entrada'
import type { Pedido, PedidoId } from './pedido'
import type { Role, RoleId } from './role'

export interface UsuarioAttributes {
  id: number
  nombre?: string
  apellidos?: string
  password?: string
  correo: string
  nombreUsuario: string
  Imagen: string
  RolFK: number
  is_deleted: number
}

export type UsuarioPk = 'id'
export type UsuarioId = Usuario[UsuarioPk]
export type UsuarioOptionalAttributes = 'id' | 'nombre' | 'apellidos' | 'password' | 'is_deleted'
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  id!: number
  nombre?: string
  apellidos?: string
  password?: string
  correo!: string
  nombreUsuario!: string
  Imagen!: string
  RolFK!: number
  is_deleted!: number

  // Usuario belongsTo Role via RolFK
  RolFK_role!: Role
  getRolFK_role!: Sequelize.BelongsToGetAssociationMixin<Role>
  setRolFK_role!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>
  createRolFK_role!: Sequelize.BelongsToCreateAssociationMixin<Role>
  // Usuario hasMany Carrito via usuarioFK
  carritos!: Carrito[]
  getCarritos!: Sequelize.HasManyGetAssociationsMixin<Carrito>
  setCarritos!: Sequelize.HasManySetAssociationsMixin<Carrito, CarritoId>
  addCarrito!: Sequelize.HasManyAddAssociationMixin<Carrito, CarritoId>
  addCarritos!: Sequelize.HasManyAddAssociationsMixin<Carrito, CarritoId>
  createCarrito!: Sequelize.HasManyCreateAssociationMixin<Carrito>
  removeCarrito!: Sequelize.HasManyRemoveAssociationMixin<Carrito, CarritoId>
  removeCarritos!: Sequelize.HasManyRemoveAssociationsMixin<Carrito, CarritoId>
  hasCarrito!: Sequelize.HasManyHasAssociationMixin<Carrito, CarritoId>
  hasCarritos!: Sequelize.HasManyHasAssociationsMixin<Carrito, CarritoId>
  countCarritos!: Sequelize.HasManyCountAssociationsMixin
  // Usuario hasMany DireccionEntrega via usuarioFK
  direccion_entregas!: DireccionEntrega[]
  getDireccion_entregas!: Sequelize.HasManyGetAssociationsMixin<DireccionEntrega>
  setDireccion_entregas!: Sequelize.HasManySetAssociationsMixin<DireccionEntrega, DireccionEntregaId>
  addDireccion_entrega!: Sequelize.HasManyAddAssociationMixin<DireccionEntrega, DireccionEntregaId>
  addDireccion_entregas!: Sequelize.HasManyAddAssociationsMixin<DireccionEntrega, DireccionEntregaId>
  createDireccion_entrega!: Sequelize.HasManyCreateAssociationMixin<DireccionEntrega>
  removeDireccion_entrega!: Sequelize.HasManyRemoveAssociationMixin<DireccionEntrega, DireccionEntregaId>
  removeDireccion_entregas!: Sequelize.HasManyRemoveAssociationsMixin<DireccionEntrega, DireccionEntregaId>
  hasDireccion_entrega!: Sequelize.HasManyHasAssociationMixin<DireccionEntrega, DireccionEntregaId>
  hasDireccion_entregas!: Sequelize.HasManyHasAssociationsMixin<DireccionEntrega, DireccionEntregaId>
  countDireccion_entregas!: Sequelize.HasManyCountAssociationsMixin
  // Usuario hasMany Entrada via UsuarioFK
  entradas!: Entrada[]
  getEntradas!: Sequelize.HasManyGetAssociationsMixin<Entrada>
  setEntradas!: Sequelize.HasManySetAssociationsMixin<Entrada, EntradaId>
  addEntrada!: Sequelize.HasManyAddAssociationMixin<Entrada, EntradaId>
  addEntradas!: Sequelize.HasManyAddAssociationsMixin<Entrada, EntradaId>
  createEntrada!: Sequelize.HasManyCreateAssociationMixin<Entrada>
  removeEntrada!: Sequelize.HasManyRemoveAssociationMixin<Entrada, EntradaId>
  removeEntradas!: Sequelize.HasManyRemoveAssociationsMixin<Entrada, EntradaId>
  hasEntrada!: Sequelize.HasManyHasAssociationMixin<Entrada, EntradaId>
  hasEntradas!: Sequelize.HasManyHasAssociationsMixin<Entrada, EntradaId>
  countEntradas!: Sequelize.HasManyCountAssociationsMixin
  // Usuario hasMany Pedido via clienteFK
  pedidos!: Pedido[]
  getPedidos!: Sequelize.HasManyGetAssociationsMixin<Pedido>
  setPedidos!: Sequelize.HasManySetAssociationsMixin<Pedido, PedidoId>
  addPedido!: Sequelize.HasManyAddAssociationMixin<Pedido, PedidoId>
  addPedidos!: Sequelize.HasManyAddAssociationsMixin<Pedido, PedidoId>
  createPedido!: Sequelize.HasManyCreateAssociationMixin<Pedido>
  removePedido!: Sequelize.HasManyRemoveAssociationMixin<Pedido, PedidoId>
  removePedidos!: Sequelize.HasManyRemoveAssociationsMixin<Pedido, PedidoId>
  hasPedido!: Sequelize.HasManyHasAssociationMixin<Pedido, PedidoId>
  hasPedidos!: Sequelize.HasManyHasAssociationsMixin<Pedido, PedidoId>
  countPedidos!: Sequelize.HasManyCountAssociationsMixin

  static initModel (sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      apellidos: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      correo: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      nombreUsuario: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      Imagen: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      RolFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }
    }, {
      sequelize,
      tableName: 'usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'RolFK',
          using: 'BTREE',
          fields: [
            { name: 'RolFK' }
          ]
        }
      ]
    })
  }
}
