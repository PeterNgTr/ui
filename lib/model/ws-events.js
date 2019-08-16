const WS_URL = 'http://localhost:3000';

const socket = require('socket.io-client')(WS_URL);

module.exports = {
    rtr: {
        suiteBefore(data) {
            socket.emit('suite.before', data);
        },
        testBefore(data) {
            socket.emit('test.before', data);
        },
        stepBefore(data) {
            socket.emit('step.before', data);
        },
        stepComment(msg) {
            socket.emit('step.say', msg);
        },
        stepPassed(data) {
            socket.emit('step.passed', data);
        },
        metaStepChanged(data) {
            socket.emit('metastep.changed', data);
        },
        testPassed(data) {
            socket.emit('test.passed', data);
        },
        testFailed(data) {
            socket.emit('test.failed', data);
        },
        testRunFinished() {
            socket.emit('testrun.finish');
        }
    },
    codeceptjs: {
        scenariosUpdated() {
            // just notify the frontend that scenarios have been changed
            // it's the frontends responsibilty to actually get
            // the updated list of scenarios
            socket.emit('codeceptjs:scenarios.updated');
        },
        scenariosParseError() {
            socket.emit('codeceptjs:scenarios.parseerror')
        },
        started(data) {
            socket.emit('codeceptjs.started', data);
        },
        exit(data) {
            socket.emit('codeceptjs.exit', data);
        },
        error(err) {
            socket.emit('codeceptjs.error', err);
        }
    }
}