/**
 * [FS] Cell Phone UI\Layouts\Layout_SettingsGeneral
 * Edits to the original Layouts\Layout_SettingsGeneral
 */
 
 ui.UiFactory.layouts.settingsGeneral = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}] },
    "controls": [
        {
            "type": "ui.Image",
            "image"() { return $dataFields.database.system.menuBackground.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.BackButton",
            "frame": [Graphics.width - 170, Graphics.height - 45, 150, 45]
        },
        {
            "type": "ui.TitledWindow",
            "frame": [
                gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 
                0, 
                gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W, 
                Graphics.height
            ],
            "params": { "title": { "lcId": "4D3EC62F007AF64B0C68E8081C003D041370", "defaultText": "General Settings" } }
        },
        {
            "type": "ui.VerticalScrollView",
            "id": "settingsScrollView",
            "frame": [
                gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 
                45, 
                gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W, 
                Graphics.height - 45 - 10
            ],
            "params": {
                "dataField": 1,
                "template": {
                    "type": "ui.StackLayout",
                    "orientation": "vertical",
                    "sizeToFit": true,
                    "controls": [
                        { 
                            "type": "ui.SettingsOptionSet", 
                            "params": { 
                                "label": { 
                                    "lcId": "2BB9D02557CFE84BAE8B7401501783BA6FBF", 
                                    "defaultText": "Display Mode" 
                                }, 
                                "write": $(v => $dataFields.settings.fullScreen = v),
                                "read": $(() => $dataFields.settings.fullScreen),
                                "group": "displayMode",
                                "onLabel": { 
                                    "lcId": "06C8957A5B6A0949DD28B96486586E93FCD4", 
                                    "defaultText": "Fullscreen" 
                                }, 
                                "offLabel": { 
                                    "lcId": "C5BB4D477FDFE54D2B5A0473BEC61239C219", 
                                    "defaultText": "Windowed" 
                                },
                                "onAction": { 
                                    "name": "enterFullScreen", 
                                    "params": {} 
                                }, 
                                "offAction": { 
                                    "name": "leaveFullScreen", 
                                    "params": {} 
                                } 
                            } 
                        },
                        { 
                            "type": "ui.SettingsOptionSet", 
                            "params": { 
                                "label": { 
                                    "lcId": "1C7C50BC434287404B392232B960C5701039", 
                                    "defaultText": "Screen Adjustment" 
                                }, 
                                "write": $(v => $dataFields.settings.aspectRatio = v),
                                "read": $(() => $dataFields.settings.aspectRatio),
                                "group": "screenAdjust",
                                "onLabel": { 
                                    "lcId": "33B51B1130853144E4888263A53B022C4ADB", 
                                    "defaultText": "Stretch" 
                                }, 
                                "offLabel": { 
                                    "lcId": "A583EEF38BB725426A6AB8965DCCDDED2982", 
                                    "defaultText": "Ratio" 
                                },
                                "onAction": { 
                                    "name": "adjustAspectRatio", 
                                    "params": true 
                                }, 
                                "offAction": { 
                                    "name": "adjustAspectRatio", 
                                    "params": false 
                                } 
                            } 
                        },
                        { 
                            "type": "ui.SettingsOptionSet", 
                            "params": { 
                                "label": { "lcId": "4F0DB69F055E3742208BE803F70C506572A3", "defaultText": "Confirmation" }, 
                                "onLabel": { 
                                    "lcId": "DB87E66F8299B549E56B2F048040DA406BCC", 
                                    "defaultText": "On" 
                                }, 
                                "offLabel": { 
                                    "lcId": "2D23328A3B4F80462E7AB2F8CD3996B20665", 
                                    "defaultText": "Off" 
                                }, 
                                "group": "confirmation", 
                                "write": $(v => $dataFields.settings.confirmation = v),
                                "read": $(() => $dataFields.settings.confirmation)
                            } 
                        }
                    ]
                }
            }
        },
        {
            "type": "ui.ConfirmationButton",
            "frame": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X - 310, Graphics.height - 45, 300, 45],
            "params": { 
                "confirmationMessage": { "lcId": "92D58F0C1B58A94ADF791B81E9479CF2A27D", "defaultText": "Do you really want to reset global data?" }, 
                "text": { "lcId": "4272A0BC5880A64DA49AEBD4D60905347726", "defaultText": "Reset Global Data" }, 
                "acceptActions": [{ "name": "resetGlobalData", "params": { "name": "titleLayout" } }, {"name":"disposeControl","params":($(() => 'confirmationDialog'))}], 
                "rejectActions": [{ "name":"disposeControl","params":($(() => 'confirmationDialog'))}] }
        }  
    ]
};