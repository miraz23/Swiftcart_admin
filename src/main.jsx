import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import theme from './config/ThemeConfig';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './contexts/user_context';
import { OrderProvider } from './contexts/order_context';
import { ProductProvider } from './contexts/product_context';
import { AdminProvider } from './contexts/admin_context';
import { ToastContainer, Bounce } from 'react-toastify'
import { router } from './router/router.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <AdminProvider>
            <OrderProvider>
              <ProductProvider>
                <ChakraProvider theme={theme}>
                    <ToastContainer 
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition={Bounce}
                    />
                    <RouterProvider router={router}/>
                </ChakraProvider>
              </ProductProvider>
            </OrderProvider>
          </AdminProvider>
        </UserProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)