const router = require('express').Router();

const { paymentDetails } = require('../controllers/pa.controller');

router.route('/pay').post(paymentDetails);

module.exports = router;