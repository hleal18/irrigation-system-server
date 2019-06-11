const mongoose = require('mongoose');
const Common = require('../common');

const ConfigurationSchema = new mongoose.Schema({
    soil_moisture_activation_treshold: {
        type: Number,
        required: true
    },
    soil_moisture_slack_treshold: {
        type: Number,
        required: true
    },
    temperature_activation_treshold: {
        type: Number,
        required: true
    },
    temperature_slack_treshold: {
        type: Number,
        required: true
    },
    water_amount_treshold: {
        type: Number,
        required: true
    },
    wait_time_treshold: {
        type: Number,
        required: true
    },
    autonomous_irrigation_activated: {
        type: Boolean,
        required: true
    }
}, {
    toObject: Common.toObjectTransformation
});