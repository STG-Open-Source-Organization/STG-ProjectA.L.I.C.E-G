(function() {
    let getCameraLayer = function () {
        let scene = SceneManager.scene;
        let objects;
        
        switch (this.params.layer) {
            case 'backgrounds':
                objects = scene.backgrounds;
                break;
            case 'pictures':
                objects = scene.pictures;
                break;
            case 'characters':
                objects = scene.characters;
                break;
        }
        
        return objects;
    }
    
    class CommandInterpreterCameraExtension extends gs.Component_CommandInterpreter {
        assignCommand(command) {
            switch (command.id) {
                case "moe.PanLayer":
                    command.execute = this.commandPanLayer;
                    break;
                case "moe.ZoomLayer":
                    command.execute = this.commandZoomLayer;
                    break;
                case "moe.RotateLayer":
                    command.execute = this.commandRotateLayer;
                    break;
                default:
                    super.assignCommand(command);
            }   
        }
        
        commandPanLayer() {
            let objects = getCameraLayer.call(this);
            
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                if (!object) continue;
                this.interpreter.moveObject(object, this.params.position, this.params);
            }
            
            gs.GameNotifier.postMinorChange();
        }
        
        commandZoomLayer() {
            let objects = getCameraLayer.call(this);
            
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                if (!object) continue;
                this.interpreter.zoomObject(object, this.params);
            }
            
            gs.GameNotifier.postMinorChange();
        }
        
        commandRotateLayer() {
            let objects = getCameraLayer.call(this);
            
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                if (!object) continue;
                this.interpreter.rotateObject(object, this.params);
            }
            
            gs.GameNotifier.postMinorChange();
        }
    }
    
    window.CommandInterpreter = CommandInterpreterCameraExtension;
    gs.Component_CommandInterpreter = CommandInterpreterCameraExtension;
}());