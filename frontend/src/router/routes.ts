/* eslint-disable @typescript-eslint/no-explicit-any */

// import IndexCarritoPage from "../carrito/pages";
import AdminDashboardPage from "../admin/dashboard/pages/AdminDashboardPage";
import AdminPedidosIndexPage from "../admin/pedidos/pages/AdminPedidosIndexPage";
import AdminViewPedidoPage from "../admin/pedidos/pages/AdminViewPedidoPage";
import AdminProductoCreatePage from "../admin/productos/pages/AdminProductoCreatePage";
import AdminProductoEditPorIdPage from "../admin/productos/pages/AdminProductoEditPorIdPage";
import AdminProductosIndexPage from "../admin/productos/pages/AdminProductosIndexPage";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";
import CarritoIndexPage from "../carrito/pages/CarritoIndexPage";
import IndexPage from "../landing/pages/IndexPage";
import PedidosPage from "../pedidos/pages/PedidosPage";
import DetalleProductoPorId from "../productos/pages/DetalleProductoPorId";
import ProductosPage from "../productos/pages/ProductosPage";
import PedidosDescPage from "../pedidos/pages/PedidosDescPage";
import AdminUsuariosIndexPage from "../admin/usuarios/pages/AdminUsuariosIndexPage";
import AdminUsuariosCreatePage from "../admin/usuarios/pages/AdminUsuariosCreatePage";
import AdminUsuariosEditPage from "../admin/usuarios/pages/AdminUsuariosEditPage";

interface RouteConfig {
    path: string;
    name: string;
    Component: any
    _protected: boolean
    hasLayout: boolean
    isAdmin?: boolean
  }

export const routes: RouteConfig[] = [
    { path: '/' , name: 'Index', Component: IndexPage , _protected: false, hasLayout: false },
    { path: '/login' , name: 'Login', Component: LoginPage , _protected: false, hasLayout: true },
    { path: '/registro' , name: 'Registro', Component: RegisterPage , _protected: false, hasLayout: true },
    { path: '/productos' , name: 'Productos', Component: ProductosPage , _protected: false, hasLayout: true },
    { path: '/carrito' , name: 'Carrito', Component: CarritoIndexPage , _protected: true, hasLayout: true },
    { path: '/mis_pedidos' , name: 'Pedidos', Component: PedidosPage , _protected: false, hasLayout: true },
    { path: '/mis_pedidos/:id' , name: 'Pedidos', Component: PedidosDescPage , _protected: false, hasLayout: true },
    { path: '/producto/:id' , name: 'Producto Por Id', Component: DetalleProductoPorId , _protected: false, hasLayout: true },
    { path: '/admin/dashboard' , name: 'Admin Dashboard', Component: AdminDashboardPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/productos' , name: 'Productos Admin', Component: AdminProductosIndexPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/producto/edit/:id' , name: 'Producto Edit Admin', Component: AdminProductoEditPorIdPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/producto/create' , name: 'Producto Crear Admin', Component: AdminProductoCreatePage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/pedidos' , name: 'Pedidos Admin', Component: AdminPedidosIndexPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/pedido/view/:id' , name: 'Pedido View Admin', Component: AdminViewPedidoPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/usuarios' , name: 'Usuarios Admin', Component: AdminUsuariosIndexPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/usuarios/create' , name: 'Usuarios Admin', Component: AdminUsuariosCreatePage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/usuarios/edit/:id' , name: 'Usuarios Editar Admin', Component: AdminUsuariosEditPage , _protected: false, hasLayout: true , isAdmin: true },

]