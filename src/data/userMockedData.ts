import {
    userInfoType,
    userActivityType,
    userAverageSessionType,
    userPerformanceType,
} from './userMockedData.type'

export const mockedUserData: userInfoType = {
    data: {
        id: 12,
        userInfos: { firstName: 'Thomas', lastName: 'Dovineau', age: 31 },
        todayScore: 0.64,
        keyData: {
            calorieCount: 2430,
            proteinCount: 109,
            carbohydrateCount: 290,
            lipidCount: 57,
        },
    },
}

export const mockedUserActivityData: userActivityType = {
    data: {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240,
            },
            {
                day: '2020-07-02',
                kilogram: 120,
                calories: 220,
            },
            {
                day: '2020-07-03',
                kilogram: 12,
                calories: 280,
            },
            {
                day: '2020-07-04',
                kilogram: 160,
                calories: 290,
            },
            {
                day: '2020-07-05',
                kilogram: 42,
                calories: 160,
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162,
            },
            {
                day: '2020-07-07',
                kilogram: 90,
                calories: 390,
            },
        ],
    },
}

export const mockedUserAvergeSessionData: userAverageSessionType = {
    data: {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 12,
            },
            {
                day: 2,
                sessionLength: 54,
            },
            {
                day: 3,
                sessionLength: 45,
            },
            {
                day: 4,
                sessionLength: 58,
            },
            {
                day: 5,
                sessionLength: 0,
            },
            {
                day: 6,
                sessionLength: 15,
            },
            {
                day: 7,
                sessionLength: 60,
            },
        ],
    },
}

export const mockedUserPerformanceData: userPerformanceType = {
    data: {
        userId: 12,
        kind: {
            '1': 'cardio',
            '2': 'energy',
            '3': 'endurance',
            '4': 'strength',
            '5': 'speed',
            '6': 'intensity',
        },
        data: [
            {
                value: 80,
                kind: 1,
            },
            {
                value: 120,
                kind: 2,
            },
            {
                value: 140,
                kind: 3,
            },
            {
                value: 50,
                kind: 4,
            },
            {
                value: 200,
                kind: 5,
            },
            {
                value: 90,
                kind: 6,
            },
        ],
    },
}
