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

function Dashboard() {
    const [userInfo, setUserInfo] = useState<userInfoType>(tmpUserInfo)

    const [userActivity, setUserActivity] =
        useState<userActivityType>(tmpUserActivity)

    const [userAverageSession, setUserAverageSession] =
        useState<userAverageSessionType>(tmpUserAverageSession)

    const [userPerfomance, setUserPerformance] =
        useState<userPerformanceType>(tmpUserPreformance)

    const { id } = useParams()

    const useMockData: boolean = true // variable to use mocked data or not, if want use api pass it to false

    const navigate = useNavigate()

    const fetchData = async (userId: number) => {
        const api = Api()

        try {
            const userInfoApi = await api.userInfo(userId)

            const userActivityApi = await api.userActivity(userId)

            const userAverageSessionApi = await api.userAverageSession(userId)

            const userPerfomanceApi = await api.userPerformance(userId)

            // We throw an error when the api return an error
            if (
                typeof userInfoApi != 'object' ||
                typeof userActivityApi != 'object' ||
                typeof userAverageSessionApi != 'object' ||
                typeof userPerfomanceApi != 'object'
            ) {
                throw Error
            } else {
                setUserInfo(userInfoApi)
                setUserActivity(userActivityApi)
                setUserAverageSession(userAverageSessionApi)
                setUserPerformance(userPerfomanceApi)
            }
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des informations utilisateur :',
                error
            )
            navigate('/error')
        }
    }

    useEffect(() => {
        //usage of mockdata or api, the app use the mocked data if useMockData is true
        if (useMockData) {
            if (id) {
                console.log(
                    'error : (dev) if you want to use the api, set the variable useMockData to "false"'
                )
                navigate('/error')
            } else {
                setUserInfo(mockedUserData)
                setUserActivity(mockedUserActivityData)
                setUserAverageSession(mockedUserAvergeSessionData)
                setUserPerformance(mockedUserPerformanceData)
            }
        } else {
            if (id) {
                const userId = parseInt(id)

                if (userId) {
                    fetchData(userId)
                } else {
                    console.log('erreur')
                    navigate('/error')
                }
            } else {
                console.log(
                    'error :(dev) if you want to use the mocked data, set the variable useMockData to "true"'
                )
                navigate('/error')
            }
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

export default Dashboard
