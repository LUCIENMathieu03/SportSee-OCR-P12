import { ReactNode } from 'react'
import Aside from './Aside'
import Header from './Header'
import '../styles/sass/layouts/layout.scss'

type LayoutsProps = {
    children: ReactNode
}

function Layout({ children }: LayoutsProps) {
    return (
        <>
            <Header />
            <div className="layout">
                <Aside />
                <div className="layout__main">{children}</div>
            </div>
        </>
    )
}

export default Layout
