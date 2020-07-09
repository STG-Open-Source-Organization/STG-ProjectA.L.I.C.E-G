/**
 * [FS] Cell Phone UI\Layouts\Layout_SettingsAudio
 * Edits to the original Layouts\Layout_SettingsAudio
 */
 
 ui.UiFactory.layouts.settingsAudio = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}] },
    "controls": [
        {
            "type": "ui.Image",
            "executeFieldFormulas": true,
            "image"() { return $dataFields.database.system.menuBackground.name||'bg-generic'; },
            "components": [{ "type": "Component_HotspotBehavior", "params": { "actionButton": "right" } }],
            "frame": [0, 0, Graphics.width, Graphics.height],
            "actions": [
                { "event": "onCancel", "name": "saveSettings", "params": { } },
                { "event": "onCancel", "name": "previousLayout", "params": { } }
            ]
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
            "params": { "title": { "lcId": "9EDC6A1760DE464C3469A5B77772305ACB56", "defaultText": "Audio Settings" } }
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
                            "type": "ui.Text",
                            "styles": ["windowCategoryUIText"],
                            "margin": [10, 5, 0, 0],
                            "text": { "lcId": "26260DB310D5D540721AF635B495750C03A5", "defaultText": "Audio" },
                            "sizeToFit": true,
                            "frame": [0, 0]
                        },
                        {
                            "type": "ui.StackLayout",
                            "orientation": "vertical",
                            "margin": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, 0, 0, 0],
                            "sizeToFit": true,
                            "id": "volumeControl",
                            "controls": [
                                { "type": "ui.SettingsMenuSlider", "params": { "id": "bgmVolume", "label": { "lcId": "DBE389A484EE65464E583082C1A3A9410B6C", "defaultText": "Music" }, "write": ($(v => $dataFields.settings.bgmVolume = v)), "read": ($(() => $dataFields.settings.bgmVolume)) } },
                                { "type": "ui.SettingsMenuSlider", "params": { "id": "seVolume",  "label": { "lcId": "64F490CD4547394ADA4B4D67693D24289F4B", "defaultText": "Sound Effects" }, "write": ($(v => $dataFields.settings.seVolume = v)), "read": ($(() => $dataFields.settings.seVolume)) } },
                                { "type": "ui.SettingsMenuSlider", "params": { "id": "voiceVolume", "label": { "lcId": "4BA0665E3B4D05412D4B81373A88DB3543EB", "defaultText": "Voice" }, "write": ($(v => $dataFields.settings.voiceVolume = v)), "read": ($(() => $dataFields.settings.voiceVolume)) } }
                            ]
                        },
                        {
                            "type": "ui.Text",
                            "styles": ["windowCategoryUIText"],
                            "margin": [10, 5, 0, 0],
                            "text": { "lcId": "DD4C5C8987E8B7493A2B4139B342CA461DC9", "defaultText": "Voices" },
                            "sizeToFit": true,
                            "frame": [0, 0]
                        },
                        {
                            "type": "ui.StackLayout",
                            "orientation": "vertical",
                            "margin": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, 0, 0, 0],
                            "sizeToFit": true,
                            "dataField": ($(() => $dataFields.database.charactersArray)),
                            "template": {
                                "type": "ui.StackLayout",
                                "orientation": "vertical",
                                "sizeToFit": true,
                                "controls": [
                                    {
                                        "type": "ui.Text",
                                        "frame": [0, 0],
                                        "sizeToFit": true,
                                        "text": "Anna",
                                        "styles": ["regularUIText"],
                                        "margin": [10, 0, 0, 0],
                                        "formulas": [$(() => o.text = lcs($dataFields.database.charactersArray[o.parent.index].name))],
                                    },
                                    { 
                                        "type": "ui.Slider", 
                                        "margin": [10, 0, 0, 0],
                                        "frame": [100, 0, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W - gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W - 30, gs.UIConstants.OPTION_BUTTON_H], 
                                        "params": { "actions": [], "max": 100, "write": ($(v => $dataFields.settings.voicesByCharacter[$dataFields.database.charactersArray[o.parent.parent.index].index] = v)), "read": ($(() => $dataFields.settings.voicesByCharacter[$dataFields.database.charactersArray[o.parent.parent.index].index])) } 
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        {
            "type": "ui.Panel",
            "frame": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 45, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, Graphics.height - 45],
            "style": "windowSubPanel"
        }
    ]
};