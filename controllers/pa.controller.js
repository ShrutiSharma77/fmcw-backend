const paymentModel = require('../models/pa_m');
const UserModel = require('../models/User_m');

exports.paymentDetails = async (req, res) => {
    try {
        const {name, transactionID} = req.body;
        cartItem.payment = {
            status: -1,
            paymentID: transactionID,
            paymentRequestID: ""
        }
        const pa = await paymentModel.findOne({ payment_id: transactionID });
        pa.push(payment_id);
        await pa.save();
        res.json({
            status: 'Success'
        })
    }
    catch(err) {
        console.log(err)
        res.json({
            status: 'Failure',
            error: err
        })
    }
}

