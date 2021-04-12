var meterData = require("../database/meterDb").meterData;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;


getAllData = (req, res) => {

    // res.status(200).json('All Data.....');

    meterData
        .findAll()
        .then( (results) => {
            res.status(200).json(results);
        })
        .catch( (error) => {
            console.error(error);
            res.status(500).json(error);
        })


}

getDataByYearMonth = (req, res) => {

    console.log(req.params);
    //  res.status(200).json('Data Year Month.....');
    
    // let month = req.params.month;
    // let nextMonth = parseInt(month) + 1;

    // console.log(`${req.params.year}-${nextMonth}`);
    let dbResults = [];
    let i = 1;

    meterData
        .findAll({
            where: { 
                Datetime: {
                    [Op.between]: [ `${req.params.year}-${req.params.month}-${req.params.day}`, 
                    `${req.params.nextyear}-${req.params.nextmonth}-${req.params.nextday}`]
                }
            }, order: [['Datetime',  'DESC']]})
        .then( (results) => {
            results.map( (row) => {
                dbResults.push({'id': i++, Datetime: row.Datetime, mw_reading: row.mw_reading});
                // i = i + 1;
            } )
            res.status(200).json(dbResults);
        })
        .catch( (error) => {
            console.error(error);
            res.status(500).json(error);
        })

}

module.exports = {
    getAllData,
    getDataByYearMonth
};