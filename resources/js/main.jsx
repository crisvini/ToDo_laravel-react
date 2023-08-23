import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import ErrorPage from "./routes/ErrorPage"
import KanbanPage from "./routes/KanbanPage"
import TablePage from "./routes/TablePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to='/kanban' />
            },
            {
                path: '/kanban',
                element: <KanbanPage />
            },
            {
                path: '/table',
                element: <TablePage />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </PrimeReactProvider>
)
