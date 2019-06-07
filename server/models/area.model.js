const mongoose = require('mongoose');
const Common = require('./common');

const AreaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    id_solenoid_valve: {
        type: Number,
        required: true
    },
    id_flow_meter: {
        type: Number,
        required: true
    },
    id_pump_motor: {
        type: Number,
        required: true
    }
}, {
    toObject: {
        transform: Common.toObjectTransformation
    }
});

module.exports = mongoose.model('areas', AreaSchema);