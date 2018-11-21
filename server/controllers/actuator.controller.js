const SolenoidValve = require('../models/actuators/solenoid-valve');
const mqttClient = require('../config/mqtt');
const { createQueryCondition } = require('../utils/models');

async function getSolenoidValveRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const solenoidValveRecords = await SolenoidValve.find(queryCondition).limit(count).sort({ date: 'desc' });

    res.send({ solenoidValveRecords });
}

async function manipulateSolenoidValve(req, res) {
    const identification = Number(req.params.identification);
    const action = String(req.body.action);

    if (!['open', 'close'].includes(action)) {
        return res.status(400).send({ message: `Action field must be 'open' or 'close'` });
    }

    const message = {
        identification,
        state: action
    };

    const messageJSON = JSON.stringify(message);

    try {
        await mqttClient.publish('irrigation-system/actuator/solenoid-valve/set', messageJSON);
        return res.send({ solenoidValve: { ...message, response: 'Message sent successfully to mqtt topic.' } });
    } catch (e) {
        return res.status(400).send({ message: `An error ocurred while publishing the message ${err}` });
    }
}

module.exports = {
    getSolenoidValveRecords,
    manipulateSolenoidValve
}