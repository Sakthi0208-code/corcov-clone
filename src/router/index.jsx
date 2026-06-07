import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import WhatWeDo from '../pages/WhatWeDo'
import Culture from '../pages/Culture'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'what-we-do',
        element: <WhatWeDo />,
      },
      {
        path: 'culture',
        element: <Culture />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
