/**
 * [FS] Cell Phone UI\Layouts\Layout_Title
 * Edits to the original Layouts\Layout_Title
 */
 
 ui.UiFactory.layouts.titleLayout = {
    type: "ui.FreeLayout",
    frame: [0, 0, Graphics.width, Graphics.height],
    music: ($(() => $dataFields.database.system.titleMusic)),
    preload: { graphics: [{name: $(() => $dataFields.database.system.titleScreen.name || 'bg-generic')}]},
    controls: [
        {
            "type": "ui.Image",
            "imageHandling": 0,
            "image"() { return $dataFields.database.system.titleScreen.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            type: "ui.Text",
            styles: ["gameTitle"],
            text() { return $dataFields.database.system.gameTitle; },
            frame: ["30%", "10%", "40%", "20%"],
            sizeToFit: true,
        },
        {
            "type": "ui.Window",
            "frame": ["40%", "50%", "20%", "50%"],
            "zIndex": 4999
        },
        {
            "type": "ui.StackLayout",
            "orientation": "vertical",
            "frame": ["40%", "52%", "20%", "48%"],
            "zIndex": 5000,
            "controls": [
                {
                    type: "ui.Text",
                    id: "newGame",
                    initialFocus: true,
                    focusable: true,
                    nextKeyObject: "loadGame",
                    styles: ["titleText"],
                    text: { 
                        lcId: "4FE8B0BD58FD914BFA8824E07226FB7F7974", 
                        defaultText: "New Game" 
                    },
                    //frame: ["70%", "50%"],
                    "alignmentX": "center",
                    sizeToFit: true,
                    action: {
                        name: "newGame"
                    }
                },
                {
                    type: "ui.Text",
                    id: "loadGame",
                    focusable: true,
                    nextKeyObject: "gallery",
                    styles: ["titleText"],
                    text: {
                    lcId: "0B92E27C6AAE1648AF1B28B2E938923EDDD7",
                    defaultText: "Load Game"
                    },
                    action: {
                        name: "switchLayout", 
                        params: { 
                            name: "loadMenuLayout", savePrevious: true, snapshot: true
                        }
                    },
                    //frame: ["70% - 10", "50% + 50"],
                    "alignmentX": "center",
                    sizeToFit: true
                },
                {
                    type: "ui.Text",
                    id: "gallery",
                    focusable: true,
                    nextKeyObject: "settings",
                    styles: ["titleText"],
                    text: {
                        lcId: "5DC22AD29AE4C84F4979470215C2383A0620",
                        defaultText: "Gallery"
                    },
                    action: {
                        name: "switchLayout",
                        params: {
                            name: "cgGalleryLayout",
                            savePrevious: true
                        }
                    },
                    //frame: ["70% - 20", "50% + 100"],
                    "alignmentX": "center",                    
                    sizeToFit: true
                },
                {
                    type: "ui.Text",
                    id: "settings",
                    focusable: true,
                    nextKeyObject: "quit",
                    styles: ["titleText"],
                    text: {
                        lcId: "D77D7952535CB1422759B668DBFB3C4FD441",
                        defaultText: "Settings"
                    },
                    //frame: ["70% - 30", "50% + 150"],
                    "alignmentX": "center",
                    sizeToFit: true,
                    action: {
                        name: "switchLayout",
                        params: {
                            name: "settingsMenuLayout",
                            savePrevious: true
                        }
                    }
                },
                {
                    type: "ui.Text",
                    styles: ["titleText"],
                    id: "quit",
                    focusable: true,
                    nextKeyObject: "newGame",
                    text: {
                        lcId: "377A3D6B2286414CAB8AAA93605A675D3AD6",
                        defaultText: "Quit"
                    },
                    //frame: ["70% - 40", "50% + 200"],
                    "alignmentX": "center",
                    action: {
                        name: "quitGame"
                    },
                    sizeToFit: true
                }            
            ]
        }    
    ]
};