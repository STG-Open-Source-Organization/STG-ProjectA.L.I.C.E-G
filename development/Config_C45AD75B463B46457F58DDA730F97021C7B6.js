(function() {
    let config = window.MOE.CoreEngine.Config;
    let loadConfig = function () {
        let configRecord = RecordManager.moeCoreEngine[0];
    };
    
    class RecordManagerCoreEngineConfig extends window.RecordManager.constructor {
        initialize() {
            super.initialize();
            loadConfig();
        }
    }
    
    window.RecordManager = new RecordManagerCoreEngineConfig();
}());