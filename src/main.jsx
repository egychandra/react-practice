import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import DarkModeContextProvider from './context/DarkMode';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import DetailProductPage from './pages/detailProduct';
import NotFoundPage from './pages/notFound';
import ProfilePage from './pages/profile';
import { TotalPriceContextProvider } from './context/TotalPriceContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
    errorElement: <NotFoundPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductPage />
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceContextProvider>
          <RouterProvider router={router} />
        </TotalPriceContextProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>,
)
