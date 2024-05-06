import {
    userInfoType,
    userActivityType,
    userAverageSessionType,
    userPerformanceType,
} from '../data/userMockedData.type'

export class UserInfoModel {
    constructor(userData: userInfoType) {
        this.userInfos = userData.data.userInfos
        this.keyData = userData.data.keyData
        this.todayScore =
            typeof userData.data.todayScore !== 'undefined'
                ? userData.data.todayScore
                : typeof userData.data.score !== 'undefined'
                ? userData.data.score
                : 0
    }

    userInfos: { firstName: string; lastName: string; age: number }
    keyData: {
        calorieCount: number
        proteinCount: number
        carbohydrateCount: number
        lipidCount: number
    }
    todayScore: number
}

export class UserActivityModel {
    constructor(data: userActivityType) {
        this.sessions = data.data.sessions
    }

    sessions: { day: string; kilogram: number; calories: number }[]
}

export class UserAverageSessionModel {
    constructor(data: userAverageSessionType) {
        this.sessions = data.data.sessions
    }

    sessions: { day: number; sessionLength: number }[]
}

export class userPerformanceModel {
    constructor(userData: userPerformanceType) {
        this.data = userData.data.data
        this.kind = userData.data.kind
    }

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
