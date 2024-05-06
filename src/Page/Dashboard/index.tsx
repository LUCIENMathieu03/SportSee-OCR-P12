import Layout from '../../components/Layout.tsx'
import Title from '../../components/Title.tsx'
import DataVisualisation from '../../components/DataVisualisation.tsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Api from '../../utils/api.ts'

import {
    userInfoType,
    userActivityType,
    userAverageSessionType,
    userPerformanceType,
} from '../../data/userMockedData.type.ts'

import {
    mockedUserData,
    mockedUserActivityData,
    mockedUserAvergeSessionData,
    mockedUserPerformanceData,
} from '../../data/userMockedData.ts'

import {
    UserInfoModel,
    UserActivityModel,
    UserAverageSessionModel,
    userPerformanceModel,
} from '../../utils/userDataModel'

const tmpUserInfo = {
    data: {
        id: 0,
        userInfos: {
            firstName: '',
            lastName: '',
            age: 0,
        },
        todayScore: 0,
        keyData: {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
        },
    },
}

const tmpUserActivity = {
    data: {
        userId: 0,
        sessions: [
            {
                day: '',
                kilogram: 0,
                calories: 0,
            },
        ],
    },
}

const tmpUserAverageSession = {
    data: {
        userId: 0,
        sessions: [
            {
                day: 0,
                sessionLength: 0,
            },
        ],
    },
}

const tmpUserPreformance = {
    data: {
        userId: 0,
        kind: {
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': '',
            '6': '',
        },
        data: [{ value: 0, kind: 0 }],
    },
}

function App() {
    const [userInfo, setUserInfo] = useState<userInfoType>(tmpUserInfo)

    const [userActivity, setUserActivity] =
        useState<userActivityType>(tmpUserActivity)

    const [userAverageSession, setUserAverageSession] =
        useState<userAverageSessionType>(tmpUserAverageSession)

    const [userPerfomance, setUserPerformance] =
        useState<userPerformanceType>(tmpUserPreformance)

    const { id } = useParams()

    useEffect(() => {
        console.log(id)

        if (id) {
            const userId = parseInt(id)

            const fetchData = async () => {
                if (id) {
                    const api = new Api()
                    try {
                        const userInfodata = await api.apiUserInfo(id)
                        setUserInfo(userInfodata)
                    } catch (error) {
                        console.error(
                            'Erreur lors de la récupération des informations utilisateur:',
                            error
                        )
                    }
                } else {
                    setUserInfo(mockedUserData)
                }
            }

            fetchData()

            // setUserInfo(mockedUserData)
            setUserActivity(mockedUserActivityData)
            setUserAverageSession(mockedUserAvergeSessionData)
            setUserPerformance(mockedUserPerformanceData)
        } else {
            setUserInfo(mockedUserData)
            setUserActivity(mockedUserActivityData)
            setUserAverageSession(mockedUserAvergeSessionData)
            setUserPerformance(mockedUserPerformanceData)
        }

        // eslint-disable-next-line
    }, [])

    const userInfoData = new UserInfoModel(userInfo)
    const userActivityData = new UserActivityModel(userActivity)
    const userPerfomanceData = new userPerformanceModel(userPerfomance)
    const UserAverageSessionData = new UserAverageSessionModel(
        userAverageSession
    )

    return (
        <Layout>
            <Title name="Thomas" />
            <DataVisualisation
                userInfoData={userInfoData}
                userActivityData={userActivityData}
                userPerfomanceData={userPerfomanceData}
                UserAverageSessionData={UserAverageSessionData}
            />
        </Layout>
    )
}

export default App
