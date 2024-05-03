import KeyNumber from './KeyNumber'

type KeyNumbersProps = {
    userKeyData: {
        calorieCount: number
        proteinCount: number
        carbohydrateCount: number
        lipidCount: number
    }
}

function KeyNumbers({ userKeyData }: KeyNumbersProps) {
    return (
        <div className="keyNumbers">
            <KeyNumber
                icon="energy"
                number={userKeyData.calorieCount}
                info="Calories"
            />
            <KeyNumber
                icon="chicken"
                number={userKeyData.proteinCount}
                info="Proteines"
            />
            <KeyNumber
                icon="apple"
                number={userKeyData.carbohydrateCount}
                info="Glucides"
            />
            <KeyNumber
                icon="cheeseburger"
                number={userKeyData.lipidCount}
                info="Lipides"
            />
        </div>
    )
}

export default KeyNumbers
