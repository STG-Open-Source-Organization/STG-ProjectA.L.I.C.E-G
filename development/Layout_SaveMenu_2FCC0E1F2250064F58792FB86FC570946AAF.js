/**
 * [FS] Cell Phone UI\Layouts\Layout_SaveMenu
 * Edits to the original Layouts\Layout_SaveMenu
 */
 
 ui.UiFactory.layouts.saveMenuLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}] },
    "controls": [
        {
            "executeFieldFormulas": true,
            "type": "ui.Image",
            "image"() { return $dataFields.database.system.menuBackground.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height],
            "action": { "event": "onCancel", "name": "previousLayout", "params": {}},
            "zIndex": 5000,
        },
        {
            "type": "ui.BackButton",
            "frame": [Graphics.width - 170, Graphics.height - 45, 150, 45]
        },
        {
            "type": "ui.TitledWindow",
            "frame": [Graphics.width - 180 - Math.floor((Graphics.width-200)/420)*420, 0, Math.floor((Graphics.width-200)/420)*420, Graphics.height],
            "params": { "title": { "lcId": "17B8950C477FA042C418D7A591445017623C", "defaultText": "Save Game" } },
            "zIndex": 5000,
        },
        {
            "type": "ui.DataScrollView",
            "frame": [Graphics.width - 170 - Math.floor((Graphics.width-200)/420)*420, 45, Math.floor((Graphics.width-200)/420)*420, Graphics.height - 45],
            "params": { 
                "spacing": [10, 10],
                "columns": Math.floor((Graphics.width-200)/420),
                "dataSource": ($(() => $dataFields.saveGameSlots)), 
                "template": {
                    "descriptor": {
                        "type": "ui.SaveGameSlot",
                        "params": {
                            "actions": [
                                { "name": "saveGame", "params": { "slot": ($(() => o.parent.index)) } },
                                { "name": "fullRefreshObject", "params": ($(() => o.parent)) }
                            ]
                        }
                    }
                }
            },
            "zIndex": 4999
        }
    ]
};