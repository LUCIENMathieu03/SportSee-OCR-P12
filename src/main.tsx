import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Page/Dashboard/index.tsx'
import Error from './Page/ErrorPage/index.tsx'
import './styles/sass/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/:id" element={<Dashboard />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
