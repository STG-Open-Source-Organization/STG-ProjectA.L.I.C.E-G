/**
 * [FS] Cell Phone UI\Templates\Template_OptionButton
 * Edits to the original Templates\Template_OptionButton
 */

ui.UiFactory.customTypes["ui.OptionButton"] = {
    "type": "ui.StackLayout",
    "sizeToFit": true,
    "controls": [
        {
            "type": "ui.Image",
            "imageHandling": 0,
            "selectable": true,
            "group"() { return p.group; },
            "style": "optionButton",
            "action"() { return p.action; },
            "formulas": [
                $((function() { if (this.onInitialize) { return o.ui.selected = this.data.read.exec(); } }), {read() { return p.read; }}),
                $((function() { 
                    return this.data.write.exec(o.ui.selected);
                }), {write() { return p.write; }})//, "onAction"
            ],
            "margin": [0, 0, 10, 0]
        },
        {
            "type": "ui.Text",
            "id": "mybtn",
            //"color": [255, 255, 255],
            "formatting": true,
            "style": "smallUIText",
            "alignmentY": "center",
            "text"() { return p.label; },
            "frame": [0, 0],
            "sizeToFit": true
        }
    ]
};