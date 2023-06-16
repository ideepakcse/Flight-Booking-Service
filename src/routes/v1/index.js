const express=require('express');

const router=express.Router();

const bookingRoutes = require('./booking-routes');
const paymentRoutes = require('./payment-routes');

router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);

module.exports=router;