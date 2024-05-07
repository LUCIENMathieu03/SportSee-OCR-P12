export type userInfoType = {
    data: {
        id: number
        userInfos: { firstName: string; lastName: string; age: number }
        todayScore?: number
        score?: number
        keyData: {
            calorieCount: number
            proteinCount: number
            carbohydrateCount: number
            lipidCount: number
        }
    }
}

export type userActivityType = {
    data: {
        userId: number
        sessions: {
            day: string
            kilogram: number
            calories: number
        }[]
    }
}

export type userAverageSessionType = {
    data: {
        userId: number
        sessions: {
            day: number
            sessionLength: number
        }[]
    }
}

export type userPerformanceType = {
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
