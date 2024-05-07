export const tmpUserInfo = {
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

export const tmpUserActivity = {
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

export const tmpUserAverageSession = {
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

export const tmpUserPreformance = {
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
