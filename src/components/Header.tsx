import '../styles/sass/layouts/header.scss'
import logo from '../styles/assets/logo.svg'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <ul className="header__nav">
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>
    )
}

export default Header
