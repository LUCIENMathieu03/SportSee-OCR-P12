import '../styles/sass/components/title.scss'

function Title() {
    return (
        <div className="title">
            <p className="title__welcome">
                Bonjour <span className="title__welcome--colored"> Thomas</span>
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Title
