const Area = require('../models/area.model');

async function getArea(req, res) {
    const id = Number(req.params.id);

    const area = await Area.find({ id });

    res.send({ area });
}

async function createArea(req, res) {
    const areaBody = {
        id: Number(req.body.id),
        solenoid_valves: req.body.solenoid_valves,
        id_flow_meter: Number(req.body.id_flow_meter),
        pump_motors: req.body.pump_motors
    };

    const area = new Area(areaBody);

    await area.save();

    res.send({ area });
}

async function deleteArea(req, res) {
    const id = req.params.id;

    await Area.findOneAndDelete({ id });

    res.send({ message: `Area with '${id}' id deleted successfully` });
}

async function getAreas(req, res) {
    const areas = await Area.find({});

    res.send({ areas });
}

module.exports = {
    getArea,
    createArea,
    deleteArea,
    getAreas
};