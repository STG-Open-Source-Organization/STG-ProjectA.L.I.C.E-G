(function() {
    let boxBackground = ui.UiFactory.customTypes["ui.MessageBoxMenu"].controls[0];
    let boxControl = ui.UiFactory.customTypes["ui.MessageBoxMenu"].controls[1];
    let commands = boxControl.controls;
    
    // make the box auto resizes base on number of commands
    boxControl.sizeToFit = {"horizontal": false, "vertical": true};
    boxBackground.frame = [0, 0, 172, 350]
    
    // add more commands to the box
    commands.push(
        {
           "type": "ui.Text",
           "styles": ["regularUIText"],
           "action": { "name": "quickSave" },
           "text": "Q.Save",
           "sizeToFit": true,
           "margin": [60, 16, 0, 0]
        },
        {
           "type": "ui.Text",
           "styles": ["regularUIText"],
           "action": { "name": "quickLoad" },
           "text": "Q.Load",
           "sizeToFit": true,
           "margin": [60, 16, 0, 0]
        }
    );
}());