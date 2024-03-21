/* eslint-disable @typescript-eslint/no-explicit-any */

// import IndexCarritoPage from "../carrito/pages";
import AdminProductoCreatePage from "../admin/productos/pages/AdminProductoCreatePage";
import AdminProductoEditPorIdPage from "../admin/productos/pages/AdminProductoEditPorIdPage";
import AdminProductosIndexPage from "../admin/productos/pages/AdminProductosIndexPage";
import LoginPage from "../auth/pages/LoginPage";
import CarritoIndexPage from "../carrito/pages/CarritoIndexPage";
import IndexPage from "../landing/pages/IndexPage";
import PedidosPage from "../pedidos/pages/PedidosPage";
import DetalleProductoPorId from "../productos/pages/DetalleProductoPorId";
import ProductosPage from "../productos/pages/ProductosPage";

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
    { path: '/productos' , name: 'Productos', Component: ProductosPage , _protected: false, hasLayout: true },
    { path: '/carrito' , name: 'Carrito', Component: CarritoIndexPage , _protected: true, hasLayout: true },
    { path: '/mis_pedidos' , name: 'Pedidos', Component: PedidosPage , _protected: false, hasLayout: true },
    { path: '/producto/:id' , name: 'Producto Por Id', Component: DetalleProductoPorId , _protected: false, hasLayout: true },
    { path: '/admin/productos' , name: 'Productos Admin', Component: AdminProductosIndexPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/producto/edit/:id' , name: 'Producto Edit Admin', Component: AdminProductoEditPorIdPage , _protected: false, hasLayout: true , isAdmin: true },
    { path: '/admin/producto/create' , name: 'Producto Crear Admin', Component: AdminProductoCreatePage , _protected: false, hasLayout: true , isAdmin: true },

]