import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import layout from '../layout/layout'
import PrivateRoute from '../routes/PrivateRoute'
import AdminsPage from '../pages/AdminsPage'
import Dashboard from '../pages/Dashboard'
import LoginPage from '../pages/LoginPage'
import OrdersPage from '../pages/OrdersPage'
import ProductsPage from '../pages/ProductsPage'
import SingleOrderPage from '../pages/SingleOrderPage'
import SingleProductPage from '../pages/SingleProductPage'

export const router = createBrowserRouter([
    {
        path: "/",
        Component: layout,
        children: [
            {
              index: true,
              element: (
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              )
            },
            {
                path: "products",
                element: (
                    <PrivateRoute>
                  <ProductsPage />
                </PrivateRoute>
              )
            },
            {
                path: "products/:id",
                element: (
                    <PrivateRoute>
                  <SingleProductPage />
                </PrivateRoute>
              )
            },
            {
              path: "orders",
              element: (
                <PrivateRoute>
                  <OrdersPage />
                </PrivateRoute>
              )
            },
            {
                path: "orders/:id",
                element: (
                  <PrivateRoute>
                    <SingleOrderPage />
                  </PrivateRoute>
                )
            },
            {
              path: "admins",
              element: (
                <PrivateRoute>
                  <AdminsPage />
                </PrivateRoute>
              )
            },
            {
                path: "login",
                element: (
                    <PrivateRoute>
                      <LoginPage />
                    </PrivateRoute>
                )
            }      
        ]
    }
])