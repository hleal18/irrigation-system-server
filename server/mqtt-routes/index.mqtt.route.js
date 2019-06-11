const irrigationServiceRoute = require('./irrigation-service.mqtt.route');
const monitoringServiceRoute = require('./monitoring-service.mqtt.route');

module.exports = {
    mqttTopics: [
        ...irrigationServiceRoute.mqttTopics,
        ...monitoringServiceRoute.mqttTopics
    ],
    mqttRoutes: {
        ...irrigationServiceRoute.mqttRoutes,
        ...monitoringServiceRoute.mqttRoutes
    }
}