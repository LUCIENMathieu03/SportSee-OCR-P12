import '../styles/sass/components/dataVisualisation.scss'
import Charts from './Charts'
import KeyNumbers from './KeyNumbers'

type DataVisualisationType = {
    userInfoData: {
        userInfos: { firstName: string; lastName: string; age: number }
        keyData: {
            calorieCount: number
            proteinCount: number
            carbohydrateCount: number
            lipidCount: number
        }
        todayScore: number
    }
    userActivityData: {
        sessions: { day: string; kilogram: number; calories: number }[]
    }
    UserAverageSessionData: {
        sessions: { day: number; sessionLength: number }[]
    }
    userPerfomanceData: {
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
}

function DataVisualisation({
    userInfoData,
    userActivityData,
    UserAverageSessionData,
    userPerfomanceData,
}: DataVisualisationType) {
    return (
        <div className="dataVis">
            <Charts
                activity={userActivityData}
                sessions={UserAverageSessionData}
                performance={userPerfomanceData}
                score={userInfoData.todayScore}
            />
            <KeyNumbers userKeyData={userInfoData.keyData} />
        </div>
    )
}

export default DataVisualisation
