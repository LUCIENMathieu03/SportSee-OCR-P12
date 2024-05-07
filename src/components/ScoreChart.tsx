import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import '../styles/sass/components/scoreChart.scss'

function ScoreChart({ userScore }: { userScore: number }) {
    const dataValue = userScore * 100
    return (
        <div className="scoreChart">
            <div className="scoreChart__text">
                <p className="scoreChart__text__title">Score</p>
                <div className="scoreChart__text__info">
                    <div>
                        <span className="scoreChart__text__info__percentage">
                            {dataValue}%
                        </span>
                        <span>
                            de votre <br /> objectif
                        </span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    startAngle={90}
                    endAngle={450}
                    barSize={10}
                    barCategoryGap={0}
                    innerRadius={80}
                    data={[
                        { fill: 'white', value: 100 },
                        { fill: 'red', value: dataValue },
                    ]}
                >
                    <RadialBar
                        background={false}
                        dataKey="value"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ScoreChart
