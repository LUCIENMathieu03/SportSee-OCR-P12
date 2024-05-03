import '../styles/sass/components/dataVisualisation.scss'
import Charts from './Charts'
import KeyNumbers from './KeyNumbers'

import {
    mockedUserData,
    mockedUserActivityData,
    mockedAvergeSession,
    mockedPerformance,
} from '../data/userData'

function DataVisualisation() {
    return (
        <div className="dataVis">
            <Charts
                activity={mockedUserActivityData}
                sessions={mockedAvergeSession}
                performance={mockedPerformance}
            />
            <KeyNumbers userKeyData={mockedUserData.data.keyData} />
        </div>
    )
}

export default DataVisualisation
