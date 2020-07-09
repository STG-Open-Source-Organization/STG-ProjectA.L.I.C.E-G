/**
 * [FS] Cell Phone UI\Layouts\Layout_CGGalleryEntry
 * Edits to the original Layouts\Layout_CGGalleryEntry
 */
 
 ui.UiFactory.layouts.cgGalleryImageLayout = {
    "type": "ui.FreeLayout",
    "orientation": "vertical",
    "preload": {
        "graphics": [
            { "path": ($(() => [$tempFields.selectedImage])), "image": ($(() => o))},
            { "path": ["locked"], "image": ($(() => o))}
        ]
    },
    "frame": [0, 0, Graphics.width, Graphics.height],
    "controls": [
        {
            "type": "ui.Image",
            "frame": [0, 0],
            "formulas": [$(() => o.image = $tempFields.selectedImage)],
            "action": { "name": "executeFormulas", "params": [$(() => $backButton.visible = !$backButton.visible)] }
        },
        {
            "type": "ui.Button",
            "id": "backButton",
            "params": { "text": { "lcId": "B0FD4BF121D9E44E7589CDD35869F86F2227", "defaultText": "Back" }, "action": { "name": "previousLayout" } },
            "frame": [Graphics.width - 170, 10, 150, 45],
            "order": 1
        }
    ]
};