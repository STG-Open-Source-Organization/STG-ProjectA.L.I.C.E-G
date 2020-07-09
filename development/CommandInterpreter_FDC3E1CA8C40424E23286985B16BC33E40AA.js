(function() {
    class CommandInterpreterQuickSave extends gs.Component_CommandInterpreter {
        assignCommand (command) {
            switch (command.id) {
                case "moe.QuickSave":
                    command.execute = this.commandQuickSave;
                    break;
                case "moe.QuickLoad":
                    command.execute = this.commandQuickLoad;
                    break;
                default:
                    super.assignCommand(command);
            }   
        }
        
        commandQuickSave() {
            GameManager.quickSave();
        }
        
        commandQuickLoad() {
            GameManager.quickLoad();
        }
    }
    
    window.CommandInterpreter = CommandInterpreterQuickSave;
    gs.Component_CommandInterpreter = CommandInterpreterQuickSave;
}());