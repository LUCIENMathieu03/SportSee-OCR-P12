import Layout from '../../components/Layout.tsx'
import Title from '../../components/Title.tsx'
import DataVisualisation from '../../components/DataVisualisation.tsx'
import { useParams, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import Api from '../../utils/api.ts'

import {
    tmpUserInfo,
    tmpUserActivity,
    tmpUserAverageSession,
    tmpUserPreformance,
} from '../../data/tmpUserData.ts'

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

function App() {
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState<userInfoType>(tmpUserInfo)

    const [userActivity, setUserActivity] =
        useState<userActivityType>(tmpUserActivity)

    const [userAverageSession, setUserAverageSession] =
        useState<userAverageSessionType>(tmpUserAverageSession)

    const [userPerfomance, setUserPerformance] =
        useState<userPerformanceType>(tmpUserPreformance)

    const { id } = useParams()

    const fetchData = async (userId: number) => {
        const api = new Api()
        try {
            const userInfodata = await api.userInfo(userId)
            setUserInfo(userInfodata)
            try {
                const userActivityData = await api.userActivity(userId)
                setUserActivity(userActivityData)
                try {
                    const userAverageSession = await api.userAverageSession(
                        userId
                    )
                    setUserAverageSession(userAverageSession)

                    try {
                        const userAverageSession = await api.userPerformance(
                            userId
                        )
                        setUserPerformance(userAverageSession)
                    } catch (error) {
                        console.error('Erreur data performance :', error)
                    }
                } catch (error) {
                    console.error('Erreur data average-session :', error)
                }
            } catch (error) {
                console.error('Erreur data activity:', error)
            }
        } catch (error) {
            console.error('Erreur data information :', error)
        }
    }

    useEffect(() => {
        if (id) {
            const userId = parseInt(id)

            if (userId) {
                fetchData(userId)
            } else {
                console.log('erreur')
                navigate('/error')
                //naviguer sur la page d'erreur
            }
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
            <Title name={userInfoData.userInfos.firstName} />
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
