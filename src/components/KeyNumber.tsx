import energy from '../styles/assets/fire.svg'
import apple from '../styles/assets/apple.svg'
import cheeseburger from '../styles/assets/cheeseburger.svg'
import chicken from '../styles/assets/chicken.svg'

import '../styles/sass/components/keyNumber.scss'

type KeyNumberProps = {
    icon: 'energy' | 'chicken' | 'apple' | 'cheeseburger'
    number: number
    info: 'Calories' | 'Proteines' | 'Glucides' | 'Lipides'
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

    const handleIconColor = (icon: string) => {
        switch (icon) {
            case 'energy':
                return 'red'
                break
            case 'chicken':
                return 'blue'
                break
            case 'apple':
                return 'yellow'
                break
            case 'cheeseburger':
                return 'pink'
                break
        }
    }

    return (
        <div className="keyNumber">
            <img
                src={handleIcon(icon)}
                className={`keyNumber__icon keyNumber__icon--${handleIconColor(
                    icon
                )}`}
            />
            <div className="keyNumber__info">
                <p className="keyNumber__info__number">{`${number.toLocaleString(
                    'en-US'
                )}${info === 'Calories' ? 'kCal' : 'g'}`}</p>
                <p className="keyNumber__info__text">{info}</p>
            </div>
        </div>
    )
}

export default KeyNumber
