import '../styles/sass/components/otherCharts.scss'
import DurationChart from './DurationChart'
import PerformanceChart from './PerformanceChart'
import ScoreChart from './ScoreChart'

type OtherChartsType = {
    userSessions: {
        day: number
        sessionLength: number
    }[]
    userPerfomance: {
        kind: {
            '1': string
            '2': string
            '3': string
            '4': string
            '5': string
            '6': string
        }
        data: { value: number; kind: number }[]
    }
    userScore: number
}

function OtherCharts({
    userSessions,
    userPerfomance,
    userScore,
}: OtherChartsType) {
    return (
        <div className="otherCharts">
            <DurationChart userSessions={userSessions} />
            <PerformanceChart userPerformance={userPerfomance} />
            <ScoreChart userScore={userScore} />
        </div>
    )
}

export default OtherCharts
