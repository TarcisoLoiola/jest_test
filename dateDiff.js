function dateDiff(hour){

    if( hour >= 0 && hour < 12 ) return 'Good Morning'
    else if( hour >= 12 && hour < 17 ) return 'Good Afternoon'
    else return 'Good Evenning'
}
module.exports = dateDiff