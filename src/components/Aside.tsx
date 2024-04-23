import '../styles/sass/layouts/aside.scss'
import biking from '../styles/assets/asideIcons/biking.svg'
import meditation from '../styles/assets/asideIcons/meditation.svg'
import dumbbell from '../styles/assets/asideIcons/dumbbell.svg'
import swiming from '../styles/assets/asideIcons/swiming.svg'

function Aside() {
    return (
        <aside className="aside">
            <ul className="aside__icons">
                <li>
                    <img src={meditation} />
                </li>
                <li>
                    <img src={biking} />
                </li>
                <li>
                    <img src={swiming} />
                </li>
                <li>
                    <img src={dumbbell} />
                </li>
            </ul>

            <p className="aside__copyright">Copyright, SportSee 2020</p>
        </aside>
    )
}

export default Aside
