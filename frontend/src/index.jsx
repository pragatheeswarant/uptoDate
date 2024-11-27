import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import About from './pages/About.jsx';
import Develop from './pages/Dev.jsx';
import Bug from './pages/Bug.jsx';
import Career from './pages/Career.jsx';
import Contact from './pages/Contact.jsx';
import Form from './pages/Form.jsx';
import Login from './pages/Login.jsx';
import Table from './pages/Table.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import  store  from './redux/store.jsx'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dev",
    element: <Develop />,
  },
  {
    path: "/bug",
    element: <Bug />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/admin-panel",
    element: <Login />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
