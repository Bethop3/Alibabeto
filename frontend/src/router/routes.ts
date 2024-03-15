/* eslint-disable @typescript-eslint/no-explicit-any */

// import IndexCarritoPage from "../carrito/pages";
import IndexPage from "../landing/pages/IndexPage";

interface RouteConfig {
    path: string;
    name: string;
    Component: React.ComponentType<any>;
    protected: boolean
  }

export const routes: RouteConfig[] = [
    { path: '/' , name: 'Index', Component: IndexPage , protected: true }
]