/**
 * [FS] Cell Phone UI\Layouts\Layout_CGGallery
 * Edits to the original Layouts\Layout_CGGallery
 */

ui.UiFactory.layouts.cgGalleryLayout = {
    "type": "ui.FreeLayout",
    "orientation": "vertical",
    "preload": {
        "graphics": [
            { "name": $(() => $dataFields.database.system.menuBackground.name || 'bg-generic') },
            { "path": ($(() => $dataFields.database.cgGalleryArray)), "image": ($(() => (o.thumb != null ? o.thumb.name : undefined) != null ? (o.thumb != null ? o.thumb.name : undefined) : o))},
            { "path": ["locked"], "image": ($(() => o))}
        ]
    },
    "frame": [0, 0, Graphics.width, Graphics.height],
    "controls": [
        {
            "id": "background",
            "type": "ui.Image",
            "imageHandling": 0,
            "image"() { return $dataFields.database.system.menuBackground.name || 'bg-generic'; },
            "frame": [0, 0, Graphics.width, Graphics.height]
        },
        {
            "type": "ui.Button",
            "id": "backButton",
            "params": { "text": { "lcId": "B0FD4BF121D9E44E7589CDD35869F86F2227", "defaultText": "Back" }, "action": { "name": "previousLayout" } },
            "frame": [Graphics.width - 170, Graphics.height - 45, 150, 45],
            "order": 1
        },
        {
            "type": "ui.TitledWindow",
            "components": [{ "type": "Component_HotspotBehavior", "params": {} }],
            "id": "galleryWindow",
            "frame": [Graphics.width - 410, 0, 220, Graphics.height],
            "params": { "title": { "lcId": "F957AB5C572C3642839AAB12D429F0C1AA3C", "defaultText": "Chapters" } }
        },
        {
            "type": "ui.DataScrollView",
            "frame": [Graphics.width - 410, 10 + 45, 220, Graphics.height - 45 - 10],
            "params": {
                "spacing": [10, 10],
                "columns": 1,
                "dataSource": $(() => $dataFields.chapters),
                "template": {
                    "size": [220, 45],
                    "descriptor": {
                        "type": "ui.Text",
                        "formulas": [$(function() { 
                            o.text = $dataFields.chapters[o.index].items.name;
                            if (this.onInitialize && (o.index === 0)) { return o.ui.selected = true; }
                        })
                        ],
                        "font": { "name": "Times New Roman", "italic": true, "size": 45 },
                        "style": "selectableText",
                        "selectable": true,
                        "group": "chapters",
                        "frame": [0, 0],
                        "sizeToFit": true,
                        "action": { 
                            "event": "onAccept",
                            "name": "executeFormulas", 
                            "params": [
                                $(() => $scrollView.controls[1].behavior.dataSource = $dataFields.cgGalleryByChapter[$dataFields.chapters[o.index].uid])
                            ]
                        }
                    }
                }
            }
        },
        {
            "type": "ui.TitledWindow",
            "components": [{ "type": "Component_HotspotBehavior", "params": {} }],
            "id": "galleryWindow",
            "frame": [Graphics.width - gs.UIConstants.CG_GALLERY_CONTENT_WIDTH - 430, 0, gs.UIConstants.CG_GALLERY_CONTENT_WIDTH, Graphics.height],
            "params": { "title": { "lcId": "A80D12A37EE45448BD2A2695D7C86820AB03", "defaultText": "Gallery" } }
        },
        {
            "type": "ui.DataScrollView",
            "chainOrder": 3,
            "id": "scrollView",
            "frame": [Graphics.width - gs.UIConstants.CG_GALLERY_CONTENT_WIDTH - 430, gs.UIConstants.CG_GALLERY_CONTENT_WIDTH, Graphics.height - 45 - 10],
            "params": {
                "spacing": [10, 10],
                "columns": Math.floor(gs.UIConstants.CG_GALLERY_CONTENT_WIDTH / 165),
                "dataSource": $(() => $dataFields.cgGalleryByChapter[$dataFields.chapters[0] != null ? $dataFields.chapters[0].uid : undefined]),
                "template": {
                    "size": [165, 124],
                    "descriptor": {
                        "type": "ui.FreeLayout",
                        "frame": [0, 0],
                        "sizeToFit": true,
                        "group": "gallery",
                        "style": "cgGalleryImage",
                        "controls": [
                            {
                                "type": "ui.Frame",
                                "style": "cgGalleryImageFrame",
                                "frame": [0, 0, "100%", "100%"],
                                "padding": [-16, -16, -16, -16],
                                "zIndex": 10,
                                "actions": [
                                    { 
                                        "condition": { "field": ($(() => o.parent.controls[1].image)), "notEqualTo": ($(() => 'locked')) },  
                                        "name": "executeFormulas", 
                                        "params": [$(() => $tempFields.selectedImage = o.parent.data[0].graphic.name)]
                                    },
                                    { 
                                        "condition": { "field": ($(() => o.parent.controls[1].image)), "notEqualTo": ($(() => 'locked')) },  
                                        "name": "switchLayout", 
                                        "params": { "name": "cgGalleryImageLayout", "savePrevious": true }
                                    }
                                ]
                            },
                            { 
                                "type": "ui.Image",
                                "frame":[0, 0, 165, 124] ,
                                "fixedSize": true,
                                "image": "locked",
                                "formulas": [
                                    ($(function() {
                                        if ($dataFields.globalData.cgGallery[o.parent.data[0].index].unlocked) {
                                            return o.image = o.parent.data[0].thumb.name;
                                        }})),
                                    ($(function() {
                                        if (!$dataFields.globalData.cgGallery[o.parent.data[0].index].unlocked) {
                                            return o.image = "locked";
                                        }}))
                                ]
                            }
                        ]
                    }
                }
            }
        }
    ]
};