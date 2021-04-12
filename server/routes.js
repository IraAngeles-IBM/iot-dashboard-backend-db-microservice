const express = require('express');

const router = new express.Router({ mergeParams: true });

//http://192.168.1.132:3001/api/v1/db/data/2013/07/2013/08/
// const dataController = require("./api/dataController").default;
const dataController = require("./api/dataController");

router.get('/v1/db/alldata', dataController.getAllData);
router.get('/v1/db/data/:year/:month/:day/:nextyear/:nextmonth/:nextday', dataController.getDataByYearMonth);

module.exports = router;