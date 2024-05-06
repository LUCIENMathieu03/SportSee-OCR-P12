class Api {
    constructor() {}

    apiUserInfo = async (id: string) => {
        const userInfoUrl = `http://localhost:3000/user/${id}`

        try {
            const response = await fetch(userInfoUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error)
        }
    }
}

export default Api
