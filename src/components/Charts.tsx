import '../styles/sass/components/charts.scss'
import ActivityChart from './ActivityChart'
import OtherCharts from './OtherCharts'

type ChartsType = {
    activity: {
        data: {
            userId: number
            sessions: {
                day: string
                kilogram: number
                calories: number
            }[]
        }
    }

    sessions: {
        data: {
            userId: number
            sessions: {
                day: number
                sessionLength: number
            }[]
        }
    }

    performance: {
        data: {
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
}

function Charts({ activity, sessions, performance }: ChartsType) {
    return (
        <div className="charts">
            <ActivityChart userActivity={activity.data.sessions} />
            <OtherCharts
                userSessions={sessions.data.sessions}
                userPerfomance={performance.data}
            />
        </div>
    )
}

export default Charts
