var sh = require("shelljs");

module.exports.rebuildStatic = (modelCfg) => {
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
    return (...args) => {
        runScript("/path/to/script");
        if(fn != undefined) {
            fn(...args);
        }
    }
}

function runScript(path, ...args) {
    console.log(path);
}
