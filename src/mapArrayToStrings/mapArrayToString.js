const mapArrayToString = (arr) => {
    return arr.filter(item => Number.isInteger(item)).map(item => item.toString())
}


module.exports = mapArrayToString