const mongoose = require('mongoose');
const Common = require('./common');

const AreaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    solenoid_valves: {
        type: [Number],
        required: true
    },
    id_flow_meter: {
        type: Number,
        required: true
    },
    pump_motors: {
        type: [Number],
        required: true
    }
}, {
        toObject: {
            transform: Common.toObjectTransformation
        }
    });

module.exports = mongoose.model('areas', AreaSchema);