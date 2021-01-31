var sh = require("shelljs");
const { execFile } = require("child_process");

module.exports.rebuildOnUpdate = (modelCfg) => {
    return {
        lifecycles: {
            // TODO: make it parameterizable
            afterUpdate: refreshBuild(modelCfg.lifecycles?.afterUpdate),
            afterDelete: refreshBuild(modelCfg.lifecycles?.afterDelete),
            afterCreate: refreshBuild(modelCfg.lifecycles?.afterCreate),
            ...modelCfg.lifecycles,
        },
        ...modelCfg,
    };
}

function refreshBuild(fn) {
    return async (...args) => {
        const child = execFile("./lib/rebuild_static.sh");

        child.stdout.on("data", console.log);
        child.on("exit", (code, signal) => {
            console.log("Finish rebuild:", code, signal);
        });

        if(fn != undefined) {
            await fn(...args);
        }
    }
}
