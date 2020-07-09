(function () {
    class GameManagerQuickSave extends GameManager.constructor {
        constructor() {
            super();
            this.quickSaveSlot = {};
        }
        
        initialize() {
            super.initialize();
            this.createQuickSaveHeader();
        }
        
        get quickSaveFilename() {
            return "SaveGame_Quick";
        }
        
        createQuickSaveHeader() {
            let headerFile = `${this.quickSaveFilename}_Header`;
            let header = {};
            this.quickSaveSlot = {};
            if (GameStorage.exists(headerFile)) {
                header = GameStorage.getObject(headerFile);
            }
            this.quickSaveSlot.date = header.date;
            return this.quickSaveSlot;
        }
        
        quickSave() {
            this.prepareSaveGame(true);
            if (this.saveGame) {
                let header = this.createSaveGameHeader();
                this.quickSaveSlot = this.createSaveGameSlot(header);
                this.storeSaveGame(this.quickSaveFilename, this.saveGame, header);
                this.sceneData = {};
            }
            return this.saveGame;
        }
        
        quickLoad() {
            if (!this.quickSaveSlot || this.quickSaveSlot.date.trim().length === 0) {
                return;
            }
        
            this.prepareLoadGame();
            this.loadedSaveGame = this.loadSaveGame(this.quickSaveFilename);
            
            SceneManager.switchTo(new vn.Object_Scene());
            SceneManager.clear();
        }
    } 
    
    window.GameManager = new GameManagerQuickSave();
    gs.GameManager = window.GameManager;
}());