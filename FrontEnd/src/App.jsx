import './App.css';
import React from 'react';
import Home from './component/Home.jsx';
import Page from './Page/page.jsx';
import Page2 from './Page/page2.jsx';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "page",
    element: <Page/>
  },

  {
    path: "page2",
    element: <Page2/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


export default App;
