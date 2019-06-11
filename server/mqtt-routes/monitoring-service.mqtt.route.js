const controllersObject = require('../mqtt-controllers/monitoring-service.mqtt.controller');

const monitoringServicePrefix = 'monitoring-service/';

const topics = {
    area: monitoringServicePrefix + 'area'
};

const topicsDescription = Object.keys(topics).map(key => topics[key]);

const mqttRoutes = {
    [topics.area]: {
        topic: topics.area,
        controller: controllersObject.areaController
    }
}

module.exports = { mqttTopics: topicsDescription, mqttRoutes };