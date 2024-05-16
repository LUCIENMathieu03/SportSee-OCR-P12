function Api() {
    const userInfo = async (id: number) => {
        const infoUrl = `http://localhost:3000/user/${id}`

        try {
            const response = await fetch(infoUrl)

            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "user info" :',
                error
            )
        }
    }

    const userActivity = async (id: number) => {
        const activityUrl = `http://localhost:3000/user/${id}/activity`

        try {
            const response = await fetch(activityUrl)

            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "d\'activité" :',
                error
            )
        }
    }

    const userAverageSession = async (id: number) => {
        const averageSessionUrl = `http://localhost:3000/user/${id}/average-sessions`

        try {
            const response = await fetch(averageSessionUrl)

            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "d\'average session:"',
                error
            )
        }
    }

    const userPerformance = async (id: number) => {
        const averageSessionUrl = `http://localhost:3000/user/${id}/performance`

        try {
            const response = await fetch(averageSessionUrl)

            const data = await response.json()

            return data
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données "de performance":',
                error
            )
        }
    }

    return {
        userInfo,
        userActivity,
        userAverageSession,
        userPerformance,
    }
}

export default Api
