/**
 * [FS] Cell Phone UI\Layouts\Layout_SettingsMenu
 * Edits to the original Layouts\Layout_SettingsMenu
 */
 
 ui.UiFactory.layouts.settingsMenuLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { 
        graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}],
        "sounds": [{ "name": $(() => $dataFields.database.system.menuSelectSound != null ? $dataFields.database.system.menuSelectSound.name : undefined) }]
    },
    "controls": [
        {
            "executeFieldFormulas": true,
            "type": "ui.Image",
            "image"() { return $dataFields.database.system.menuBackground.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.Window",
            "frame": ["40%", "50%", "20%", "50%"],
            "zIndex": 4999
        },
        {
            "type": "ui.StackLayout",
            "orientation": "vertical",
            "sizeToFit": true,
            "zIndex": 5000,
            "frame": ["40%", "52%", "20%", "48%"],
            "controls": [
                {
                    "id": "general",
                    type: "ui.Text",
                    initialFocus: true,
                    focusable: true,
                    nextKeyObject: "message",
                    styles: ["titleText"],
                    "text": {
                        "lcId": "149D0E4B8AF8574E5A8BF574FD9A9590B69A",
                        "defaultText": "General"
                    },
                    //frame: ["70%", "50%"],
                    "alignmentX": "center",
                    sizeToFit: true,
                    "action": {
                        "name": "switchLayout",
                        "params": {
                            "name": "settingsGeneral",
                            "savePrevious": true }
                    }
                },
                {
                    "id": "message",
                    type: "ui.Text",
                    focusable: true,
                    nextKeyObject: "audio",
                    styles: ["titleText"],
                    "text": {
                        "lcId": "6683560332F9274AEE1B5D96FCA020F57DDE",
                        "defaultText": "Message"
                    },
                    //frame: ["70%", "50%"],
                    "alignmentX": "center",
                    sizeToFit: true,
                    "action": {
                        "name": "switchLayout",
                        "params": {
                            "name": "settingsMessage",
                            "savePrevious": true }
                    }
                },
                {
                    "id": "audio",
                    type: "ui.Text",
                    focusable: true,
                    nextKeyObject: "general",
                    styles: ["titleText"],
                    "text": {
                        "lcId": "92FDB732611153400B595AD7D92206CDC592",
                        "defaultText": "Audio"
                    },
                    //frame: ["70%", "50%"],
                    "alignmentX": "center",
                    sizeToFit: true,
                    "action": {
                        "name": "switchLayout",
                        "params": {
                            "name": "settingsAudio",
                            "savePrevious": true }
                    }
                },
                {
                    "type": "ui.Button",
                    "formulas": [$(() => o.visible = $tempFields.inGame)],
                    "params": { 
                        "text": { "lcId": "A6EE5D6732DD454DDE988B569929C5F2DA62", "defaultText": "Back to Title" }, 
                        "action": { "name": "createControl", "params": { "descriptor": { 
                            "id": "confirmationDialog",
                            "type": "ui.ConfirmationDialog",
                            "zIndex": 90000,
                            "params": { 
                                "message": { "lcId": "ABC85CC3669B83481309BDF44B98EF11B59B", "defaultText": "Do you really want to exit?" },
                                "acceptActions": [{"name":"exitGame"},{"name": "switchLayout", "params": { "name": "titleLayout", "clear": true } }] , 
                                "rejectActions": [{"name":"disposeControl","params":($(() => 'confirmationDialog'))}]}
                        } } }
                    },
                    "frame": [0, 0, 300, 55],
                    "margin": [0, 0, 0, 20]
                }
            ]
        },
        {
            "type": "ui.BackButton",
            "frame": [Graphics.width - 170, Graphics.height - 45, 150, 45]
        }
    ]
};