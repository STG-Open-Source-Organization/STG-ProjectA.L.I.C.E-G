/**
 * [FS] Cell Phone UI\Layouts\Layout_SettingsMessage
 * Edits to the original Layouts\Layout_SettingsMessage
 */

ui.UiFactory.layouts.settingsMessage = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}] },
    "controls": [
        {
            "executeFieldFormulas": true,
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
            "params": { "title": { "lcId": "B5E0981F6D6A9240653B23A0D09B3383048E", "defaultText": "Message Settings" } }
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
                            "type": "ui.StackLayout",
                            "orientation": "vertical",
                            "sizeToFit": true,
                            "controls": [
                                { "type": "ui.SettingsStepSlider", "params": { "label": { "lcId": "179347604CAF0640628824725774FFBD07B6", "defaultText": "Message Speed" }, "steps": 6, "write": ($(v => $dataFields.settings.messageSpeed = v)), "read": ($(() => Math.round($dataFields.settings.messageSpeed))), "data": 
                                    [
                                        { "lcId": "41A878A74A390447FB9AB956122AD13373D1", "defaultText": "Slowest" }, 
                                        { "lcId": "3D840F7D30D472419059F342ACF0C846B0ED", "defaultText": "Slow" }, 
                                        { "lcId": "12C3DA314B22614AC67890D37019784EDFA9", "defaultText": "Normal" }, 
                                        { "lcId": "889AFB7C545AE8477889E11480BE6871ECA1", "defaultText": "Fast" }, 
                                        { "lcId": "DE5E3CF01CDA784C378B428533F4D6E03C96", "defaultText": "Fastest" },
                                        { "lcId": "FB31C7F852F3C04DE95AD7E4D3ABA68B14BA", "defaultText": "Instant" }
                                    ] 
                                } },
                                { "type": "ui.SettingsOptionSet", "params": { "label": { "lcId": "ED439B0C58174541F17B79280D5763C674AB", "defaultText": "Auto-Message" }, "group": "autoMessage", "write": ($(v => $dataFields.settings.autoMessage.enabled = v)), "read": ($(() => $dataFields.settings.autoMessage.enabled)) } },
                                { "type": "ui.SettingsStepSlider", "params": { "label": { "lcId": "D073E5F78F4FF8423249BBC5E61064361B09", "defaultText": "Auto-Message Duration" }, "group": "autoMessageDuration", "write": ($(v => $dataFields.settings.autoMessage.time = v)), "read": ($(() => $dataFields.settings.autoMessage.time)), "data": 
                                    [
                                        { "lcId": "4FE0B4B30E8789487D7B88D2839ECBCE5C70", "defaultText": "1 Second" }, 
                                        { "lcId": "1C20A916753BC840952864867489B576DBD5", "defaultText": "2 Seconds" }, 
                                        { "lcId": "FBF01A7B3C1BB2489F2B2D0581A257A102E6", "defaultText": "3 Seconds" }, 
                                        { "lcId": "DE0D08A67E84B1476E4A1B604CB64E4BC942", "defaultText": "4 Seconds" }, 
                                        { "lcId": "964CF20A55D2F3404B389B67AAF1CDA51656", "defaultText": "5 Seconds" }
                                    ] 
                                } },
                                { "type": "ui.SettingsOptionSet", "params": { "label": { "lcId": "994D4B5C1BFA5445385B8AE32706997132F1", "defaultText": { "lcId": "994D4B5C1BFA5445385B8AE32706997132F1", "defaultText": "Wait for Voice" } }, "group": "waitForVoice", "write": ($(v => $dataFields.settings.autoMessage.waitForVoice = v)), "read": ($(() => $dataFields.settings.autoMessage.waitForVoice)) } },
                                { "type": "ui.SettingsOptionSet", "params": { "label": { "lcId": "BF3E948519A9084E721AF585C8C7D51235A7", "defaultText": { "lcId": "BF3E948519A9084E721AF585C8C7D51235A7", "defaultText": "Stop on Click" } }, "group": "stopOnAction", "write": ($(v => $dataFields.settings.autoMessage.stopOnAction = v)), "read": ($(() => $dataFields.settings.autoMessage.stopOnAction)) } },
                                { "type": "ui.SettingsOptionSet", "params": { "label": { "lcId": "3538F7E582FC20467E7947F77FB45789115E", "defaultText": { "lcId": "3538F7E582FC20467E7947F77FB45789115E", "defaultText": "Time Message to Voice" } }, "group": "timeMessageToVoice", "write": ($(v => $dataFields.settings.timeMessageToVoice = v)), "read": ($(() => $dataFields.settings.timeMessageToVoice)) } }
                            ]
                        },
                        {
                            "type": "ui.StackLayout",
                            "orientation": "vertical",
                            "sizeToFit": true,
                            "controls": [
                                {
                                    "type": "ui.StackLayout",
                                    "orientation": "vertical",
                                    "sizeToFit": true,
                                    "controls": [
                                        { 
                                            "type": "ui.Text", 
                                            "text": { "lcId": "0B7D6CF76F833444EF39BBC8B590114C97A4", "defaultText": "Skip" }, 
                                            "styles": ["regularUIText"], 
                                            "frame": [0, 0, 220, 37],
                                            "margin": [10, 0, 0, 0], 
                                            "alignmentY": "top" 
                                        },
                                        {
                                            "type": "ui.StackLayout",
                                            "sizeToFit": true,
                                            "controls": [
                                                { 
                                                    "type": "ui.OptionButton", 
                                                    "params": { 
                                                        "label": { "lcId": "C138CE3C9564C54707492AA264690B5BBB90", "defaultText": "Videos" }, 
                                                        "write": $(v => $dataFields.settings.allowVideoSkip = v),
                                                        "read": $(() => $dataFields.settings.allowVideoSkip)
                                                    }
                                                },
                                                { 
                                                    "type": "ui.OptionButton", 
                                                    "params": { 
                                                        "label": { "lcId": "E4A4BA053854774F582852D558E4E5C23AC5", "defaultText": "Voices" }, 
                                                        "write": $(v => $dataFields.settings.skipVoiceOnAction = v),
                                                        "read": $(() => $dataFields.settings.skipVoiceOnAction)
                                                    } 
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ui.StackLayout",
                                            "sizeToFit": true,
                                            "controls": [
                                                { 
                                                    "type": "ui.OptionButton", 
                                                    "params": { 
                                                        "label": { "lcId": "469C50C92465724C9F48BD86BB799E781F3C", "defaultText": "Unread" }, 
                                                        "write": $(v => $dataFields.settings.allowSkipUnreadMessages = v),
                                                        "read": $(() => $dataFields.settings.allowSkipUnreadMessages)
                                                    } 
                                                },
                                                { 
                                                    "type": "ui.OptionButton", 
                                                    "params": { 
                                                        "label": { "lcId": "F84B92944EA3354A49184BF155F42220FE9B", "defaultText": "Choices" }, 
                                                        "write": $(v => $dataFields.settings.allowChoiceSkip = v),
                                                        "read": $(() => $dataFields.settings.allowChoiceSkip)
                                                    } 
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
};