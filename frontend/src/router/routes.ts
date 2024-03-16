/* eslint-disable @typescript-eslint/no-explicit-any */

// import IndexCarritoPage from "../carrito/pages";
import LoginPage from "../auth/pages/LoginPage";
import IndexPage from "../landing/pages/IndexPage";
import DetalleProductoPorId from "../productos/pages/DetalleProductoPorId";
import ProductosPage from "../productos/pages/ProductosPage";

interface RouteConfig {
    path: string;
    name: string;
    Component: any
    _protected: boolean
    hasLayout: boolean
  }

export const routes: RouteConfig[] = [
    { path: '/' , name: 'Index', Component: IndexPage , _protected: true, hasLayout: false },
    { path: '/login' , name: 'Login', Component: LoginPage , _protected: false, hasLayout: true },
    { path: '/productos' , name: 'Productos', Component: ProductosPage , _protected: false, hasLayout: true },
    { path: '/producto/:id' , name: 'Producto Por Id', Component: DetalleProductoPorId , _protected: false, hasLayout: true },

]