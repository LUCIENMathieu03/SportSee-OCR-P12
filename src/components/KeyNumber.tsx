import energy from '../styles/assets/fire.svg'
import apple from '../styles/assets/apple.svg'
import cheeseburger from '../styles/assets/cheeseburger.svg'
import chicken from '../styles/assets/chicken.svg'

import '../styles/sass/components/keyNumber.scss'

type KeyNumberProps = {
    icon: string
    number: string
    info: string
}

function KeyNumber({ icon, number, info }: KeyNumberProps) {
    const handleIcon = (icon: string) => {
        switch (icon) {
            case 'energy':
                return energy
                break
            case 'chicken':
                return chicken
                break
            case 'apple':
                return apple
                break
            case 'cheeseburger':
                return cheeseburger
                break
        }
    }

    return (
        <div className="keyNumber">
            <img src={handleIcon(icon)} className="keyNumber__icon" />
            <div className="keyNumber__number">
                <p>{number}</p>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default KeyNumber
