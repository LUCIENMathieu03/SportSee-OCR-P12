import '../styles/sass/components/otherCharts.scss'
import DurationChart from './DurationChart'
import PerformanceChart from './PerformanceChart'

type OtherChartsType = {
    userSessions: {
        day: number
        sessionLength: number
    }[]
    userPerfomance: {
        userId: number
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
}
function OtherCharts({ userSessions, userPerfomance }: OtherChartsType) {
    return (
        <div className="otherCharts">
            <DurationChart userSessions={userSessions} />
            <PerformanceChart userPerformance={userPerfomance} />
        </div>
    )
}

export default OtherCharts
