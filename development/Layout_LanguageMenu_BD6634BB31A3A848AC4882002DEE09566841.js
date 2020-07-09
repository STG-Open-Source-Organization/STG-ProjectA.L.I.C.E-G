/**
 * [FS] Cell Phone UI\Layouts\Layout_LanguageMenu
 * Edits to the original Layouts\Layout_LanguageMenu
 */
 
ui.UiFactory.layouts.languageMenuLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "music": ($(() => $dataFields.database.system.languageMusic)),
    "preload": {
        "sounds": [
            () => $dataFields.database.system.menuSelectSound,
            () => $dataFields.database.system.menuCancelSound,
            () => $dataFields.database.system.menuQuitSound,
            () => $dataFields.database.system.menuLoadSound,
            () => $dataFields.database.system.menuSaveSound
        ]
    },
    "controls": [
        {
            "type": "ui.Image",
            "image"() { return $dataFields.database.system.languageScreen.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.StackLayout",
            "orientation": "horizontal",
            "frame": [0, Graphics.height - 45, Graphics.width, Graphics.height],
            "sizeToFit": true,
            "dataField": $(() => $dataFields.languages),
            "template": {
                "type": "ui.FreeLayout",
                "resizable": false,
                "anchor": [0.5, 0.5],
                "animations2": [
                    {
                        "event": "onTerminate",
                        "condition": ($(() => s.index > o.index)),  //{ "if": ($ -> o.index > t.index), "target": ($ -> o.parent.subObjects) },
                        "flow": [
                            { "type": "disappear", "animation": { "type": 0, "movement": 1 }, "duration": 30, "easing": "cubic_in", "wait": true }
                        ]
                    },
                    {
                        "event": "onTerminate",
                        "condition": { "if": ($(() => o.index < t.index)), "target": ($(() => o.parent.subObjects)) },
                        "flow": [
                            { "type": "disappear", "animation": { "type": 1, "movement": 3 }, "duration": 30, "easing": "cubic_in", "wait": true }
                        ]
                    },
                    {
                        "event": "onTerminate",
                        "condition": { "if": ($(() => o === t)), "target": ($(() => o.parent.subObjects)) },
                        "flow": [
                            { "type": "zoomTo", "zoom": [150, 150], "duration": 30, "wait": false },
                            { "type": "disappear", "animation": { "type": 1 }, "duration": 30, "easing": "cubic_in", "wait": true }
                        ]
                    }
                ],
                "frame": [0, 0, 300, 50],
                "margin": [0, 0, 0, 15],
                "controls":[
                    {
                        "type": "ui.SelectableWindow",
                        "frame": [0, 0, "100%", "100%"],
                        "inheritProperties": true,
                        "margin": [0, 0, 0, 0],
                        "params": {
                            "actions": [
                                { "name": "selectLanguage", "params": ($(() => o.parent.parent.index)) },
                                { "name": "switchLayout", "params": { "name": "titleLayout" } }
                             ]
                        },
                        "zIndex": 4999
                    },
                    {
                        "type": "ui.Image",
                        "imageFolder": "Graphics/Icons",
                        "formulas": [$(() => o.image = $dataFields.languages[o.parent.index].icon.name)],
                        "alignmentX": "right",
                        "alignmentY": "center",
                        "frame": [10, 0],
                        "zIndex": "5100",
                        "anchor": [0.5, 0.5],
                        "sizeToFit": true
                    },
                    {
                        "type": "ui.Text",
                        "sizeToFit": true,
                        "styles": ["regularUIText"],
                        "alignmentX": "center",
                        "alignmentY": "center",
                        "frame": [0, 0],
                        "inheritProperties": true,
                        "margin": [0, 0, 0, 0],
                        "formulas": [$(() => o.text = $dataFields.languages[o.parent.index].name)],
                        "zIndex": 5100
                    }
                ]
            }

        }
    ]
};