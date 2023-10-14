const axios = require('axios')
const mapArrayToString = require('./../mapArrayToStrings/mapArrayToString')
const getData = async () => {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        const userIds = response.data.map(user => user.id) // Числа
        return mapArrayToString(userIds)
    } catch (e) {

    }


}

module.exports = getData