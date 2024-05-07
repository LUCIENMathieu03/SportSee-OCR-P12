class Api {
    constructor() {}

    userInfo = async (id: number) => {
        const infoUrl = `http://localhost:3000/user/${id}`

        try {
            const response = await fetch(infoUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "user info" :',
                error
            )
        }
    }

    userActivity = async (id: number) => {
        const activityUrl = `http://localhost:3000/user/${id}/activity`

        try {
            const response = await fetch(activityUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "d\'activité" :',
                error
            )
        }
    }

    userAverageSession = async (id: number) => {
        const averageSessionUrl = `http://localhost:3000/user/${id}/average-sessions`

        try {
            const response = await fetch(averageSessionUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "d\'average: session"',
                error
            )
        }
    }

    userPerformance = async (id: number) => {
        const averageSessionUrl = `http://localhost:3000/user/${id}/performance`

        try {
            const response = await fetch(averageSessionUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "de performance"',
                error
            )
        }
    }
}

export default Api
