# Alibabeto - Tienda en Línea

E-commerce completo para tienda mayorista de electrónicos en Cancún. Catálogo de productos, carrito de compras, pagos con Stripe, panel de administracion con dashboard y seguimiento de pedidos en tiempo real via WebSockets.

## Demo

[https://alibabeto.netlify.app](https://alibabeto.netlify.app)

## Features

- Catalogo de productos con filtros, busqueda y paginacion
- Carrito de compras
- Pagos con Stripe
- Panel de administracion (dashboard, productos, pedidos, usuarios)
- Seguimiento de pedidos en tiempo real (WebSockets)
- Autenticacion JWT + Google OAuth
- API REST + GraphQL
- Documentacion Swagger

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, TailwindCSS, Zustand, Apollo Client, React Router
- **Backend:** Node.js, Express, TypeScript, Sequelize, GraphQL, Socket.io
- **Database:** SQLite / MySQL
- **Payments:** Stripe
- **Auth:** JWT, Google OAuth

## Estructura

```
backend/   Servidor Express + TypeScript (API REST, GraphQL, Socket.io)
frontend/  Cliente React + Vite + TailwindCSS
```

## Setup

1. **Backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```

2. **Frontend:**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

## Licencia

MIT
