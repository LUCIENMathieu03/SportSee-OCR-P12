import '../styles/sass/components/title.scss'

type TitleProps = {
    name: string
}
function Title({ name }: TitleProps) {
    return (
        <div className="title">
            <p className="title__welcome">
                Bonjour <span className="title__welcome--colored"> {name}</span>
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Title
