/**
 * [FS] Cell Phone UI\Layouts\Layout_Game
 * Edits to the original Layouts\Layout_Game
 */
 
 ui.UiFactory.layouts.gameLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "controls":[
        {
            "type": "ui.Panel",
            "frame": [0, 0, Graphics.width, Graphics.height],
            "updateBehavior": "continuous",
            "formulas": [$(() => o.ui.enabled = $dataFields.tempSettings.menuAccess)],
            "action": { 
                "event": "onCancel", 
                "name": "switchLayout", 
                "params": { "name": "settingsMenuLayout", "savePrevious": true }
            }
        },
        {
            "type": "ui.MessageBox",
            "visible": false,
            "id": "messageBox",
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.MessageBoxNVL",
            "visible": false,
            "id": "nvlMessageBox",
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.MessageMenu",
            "visible": false,
            "id": "messageMenu",
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.GameMessage",
            "id": "gameMessage",
            "params": { "id": "gameMessage" },
            "frame": [320, Graphics.height - 220]
        },
        {
            "type": "ui.GameMessageNVL",
            "id": "nvlGameMessage",
            "params": { "id": "nvlGameMessage" },
            "frame": [0, 0]
        }
    ]
};