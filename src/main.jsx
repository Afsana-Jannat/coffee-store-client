import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Header from './components/Header';
import AddCoffee from './components/AddCoffee';
import CoffeeDetails from './components/CoffeeDetails';
import UpdatedCoffee from './components/UpdatedCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        index: true,
        Component: Header
      },
      {
        path: 'addcoffee',
        Component: AddCoffee
      },
      {
        path: '/updatedcoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdatedCoffee
      },
      {
        path: '/coffee/:id',
        Component: CoffeeDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </StrictMode>,
)
