(function() {
    class MessageTextRendererCoreEngine extends gs.Component_MessageTextRenderer {
        processControlToken(token, formattingOnly) {
            if (formattingOnly) {
                return super.processControlToken(token, formattingOnly);
            }
            let result = null;
            
            if (token.code === "SLK") {
                if (token.value === 'E') {
                    this.currentSprite.bitmap.clearRect(this.customData.linkData.cx,
                                                    this.customData.linkData.cy,
                                                    this.currentX - this.customData.linkData.cx + this.object.font.borderSize*2,
                                                    this.currentLineHeight);
                    let line = this.lines[this.line].content;
                    let linkStart = this.findToken(this.tokenIndex - 1, "SLK", -1, line);
                    let textTokens = this.findTokensBetween(this.customData.linkData.tokenIndex, this.tokenIndex, null, line);
                    
                    let object = new ui.Object_Text();
                    object.text = textTokens.select(function(x) { return x.value; }).join("");
                    object.sizeToFit = true;
                    object.formatting = true;
                    object.wordWrap = false;
                    object.ui = new ui.Component_UIBehavior();
                    object.enabled = true;
                    object.addComponent(new gs.Component_HotspotBehavior());
                    object.addComponent(object.ui);
                  
                    if (this.customData.linkData.styleIndex === -1) {
                        ui.UIManager.addControlStyles(object, ["hyperlink"]);
                    } else {
                        ui.UIManager.addControlStyles(object, ["hyperlink-" + this.customData.linkData.styleIndex]);
                    }
                    
                    object.setup();
                    
                    this.addCustomObject(object);
                    
                    object.dstRect.x = this.object.dstRect.x + this.object.origin.x + this.customData.linkData.cx;
                    object.dstRect.y = this.object.dstRect.y + this.object.origin.y + this.customData.linkData.cy;

                    object.events.on("click", gs.CallBack("onLinkClick", this), { linkData: this.customData.linkData }, this);
                    
                    console.log(object)
                } else {
                    let value = token.value.toString();
                    if (value.contains(",")) {
                        let values = value.split(",");
                        this.customData.linkData = { cx: this.currentX, cy: this.currentY, commonEventId: values[0], styleIndex: parseInt(values[1]), tokenIndex: this.tokenIndex };
                    } else {
                        this.customData.linkData = { cx: this.currentX, cy: this.currentY, commonEventId: token.value, tokenIndex: this.tokenIndex, styleIndex: -1 };
                    }
                }
            } else {
                result = super.processControlToken(token, formattingOnly);
            }
                
            
            return result;
        }
    }
    
    gs.Component_MessageTextRenderer = MessageTextRendererCoreEngine;
}());