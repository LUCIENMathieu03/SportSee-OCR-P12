import KeyNumber from './KeyNumber'

function KeyNumbers() {
    return (
        <>
            <KeyNumber icon="energy" number={1355} info="Calories" />
            <KeyNumber icon="chicken" number={155} info="Proteines" />
            <KeyNumber icon="apple" number={155} info="Glucides" />
            <KeyNumber icon="cheeseburger" number={155} info="Lipides" />
        </>
    )
}

export default KeyNumbers
