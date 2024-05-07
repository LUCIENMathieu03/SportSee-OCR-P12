import '../styles/sass/components/charts.scss'
import ActivityChart from './ActivityChart'
import OtherCharts from './OtherCharts'

type ChartsType = {
    activity: {
        sessions: { day: string; kilogram: number; calories: number }[]
    }

    sessions: {
        sessions: { day: number; sessionLength: number }[]
    }

    performance: {
        data: { value: number; kind: number }[]
        kind: {
            '1': string
            '2': string
            '3': string
            '4': string
            '5': string
            '6': string
        }
    }
    score: number
}

function Charts({ activity, sessions, performance, score }: ChartsType) {
    return (
        <div className="charts">
            <ActivityChart userActivity={activity.sessions} />
            <OtherCharts
                userSessions={sessions.sessions}
                userPerfomance={performance}
                userScore={score}
            />
        </div>
    )
}

export default Charts
