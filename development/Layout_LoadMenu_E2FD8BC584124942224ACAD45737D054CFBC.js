/**
 * [FS] Cell Phone UI\Layouts\Layout_LoadMenu
 * Edits to the original Layouts\Layout_LoadMenu
 */
 
ui.UiFactory.layouts.loadMenuLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": { graphics: [{name: $(() => $dataFields.database.system.menuBackground.name || 'bg-generic')}] },
    "controls": [
        {
            "type": "ui.Image",
            "image"() { return $dataFields.database.system.menuBackground.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height],
            "action": { "event": "onCancel", "name": "previousLayout", "params": {}}
        },
        {
            "type": "ui.BackButton",
            "frame": [Graphics.width - 170, Graphics.height - 45, 150, 45]
        },
        {
            "type": "ui.TitledWindow",
            "frame": [Graphics.width - 180 - Math.floor((Graphics.width-200)/420)*420, 0, Math.floor((Graphics.width-200)/420)*420, Graphics.height],
            "params": { "title": { "lcId": "B215F6EB2576884547399CC0CF2F38E855FD", "defaultText": "Load Game" } },
            "zIndex": 5000,
        },
        {
            "type": "ui.DataScrollView",
            "id": "list",
            "zIndex": 4999,
            "frame": [Graphics.width - 170 - Math.floor((Graphics.width-200)/420)*420, 45, Math.floor((Graphics.width-200)/420)*420, Graphics.height - 45],
            "params": { 
                "columns": Math.floor((Graphics.width-200)/420),
                "spacing": [10, 10],
                "dataSource": ($(() => $dataFields.saveGameSlots)), 
                "template": {
                    "descriptor": {
                        "type": "ui.SaveGameSlot",
                        "params": {
                            "actions": [
                                { 
                                    "name": "executeFormulas", 
                                    "params": [
                                        $(() => $tempFields.slot = o.parent.index)
                                    ] 
                                },
                                { 
                                    "name": "createControl", 
                                    "conditions": [
                                        { "field": ($(() => $dataFields.saveGameSlots[$tempFields.slot] != null ? $dataFields.saveGameSlots[$tempFields.slot].date : undefined)), "notEqualTo": ($(() => '')) },
                                        { "field": ($(() => $dataFields.settings.confirmation)), "equalTo": true },
                                        { "field": ($(() => $dataFields.tempSettings.loadMenuAccess)), "equalTo": true }
                                    ],
                                    "params": { 
                                        "descriptor": { 
                                            "id": "confirmationDialog",
                                            "type": "ui.ConfirmationDialog",
                                            "zIndex": 9999,
                                            "params": { 
                                                "message": { "lcId": "2BD08CC65B9A2248C749B9C4DEEAADE8E20A", "defaultText": "Do you really want to load?" },
                                                "acceptActions": [{ "name": "loadGame", "params": { "slot": ($(() => $tempFields.slot)) } }], 
                                                "rejectActions": [{"name":"disposeControl","params":($(() => 'confirmationDialog'))}]}
                                        } 
                                    } 
                                },
                                { "conditions": [
                                    { "field": ($(() => $dataFields.saveGameSlots[$tempFields.slot] != null ? $dataFields.saveGameSlots[$tempFields.slot].date : undefined)), "notEqualTo": ($(() => '')) },
                                    { "field": ($(() => !$dataFields.settings.confirmation || !$dataFields.tempSettings.loadMenuAccess)), "equalTo": true }
                                ], "name": "loadGame", "params": { "slot": ($(() => $tempFields.slot)) } }
                            ]
                        }
                    }
                }
            }
        }
    ]
};