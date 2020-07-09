(function() {
    class MessageTextRendererMessageTokens extends gs.Component_MessageTextRenderer {
        constructor() {
            super();
            
            let that = this;
            this.onLinkLabelClick = function(e) {
                that.clear();
                SceneManager.scene.interpreter.jumpToLabel(e.data.linkData.labelName);
            };
        }
        
        processControlToken(token, formattingOnly) {
            if (formattingOnly) {
                return super.processControlToken(token, formattingOnly);
            }
            let result = null;
            
            if (token.code === "LabelLK") {
                if (token.value == 'E') {
                    let object = new ui.Object_Hotspot();
                    object.enabled = true;
                    object.setup();
                    
                    this.addCustomObject(object);
                    
                    object.dstRect.x = this.object.dstRect.x + this.object.origin.x + this.customData.linkData.cx;
                    object.dstRect.y = this.object.dstRect.y + this.object.origin.y + this.customData.linkData.cy;
                    object.dstRect.width = this.currentX - this.customData.linkData.cx;
                    object.dstRect.height = this.currentLineHeight;

                    object.events.on("click", gs.CallBack("onLinkLabelClick", this), {linkData: this.customData.linkData}, this);
                }
                else {
                    this.customData.linkData = { cx: this.currentX, cy: this.currentY, labelName: token.value.toString(), tokenIndex: this.tokenIndex };
                }
            } else if (token.code === "LabelSLK") {
                if (token.value === 'E') {
                    this.currentSprite.bitmap.clearRect(this.customData.linkData.cx,
                                                    this.customData.linkData.cy,
                                                    this.currentX - this.customData.linkData.cx + this.object.font.borderSize*2,
                                                    this.currentLineHeight);
                    let line = this.lines[this.line].content;
                    let linkStart = this.findToken(this.tokenIndex - 1, "LabelSLK", -1, line);
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

                    object.events.on("click", gs.CallBack("onLinkLabelClick", this), { linkData: this.customData.linkData }, this);
                } else {
                    let value = token.value.toString();
                    if (value.contains(",")) {
                        let values = value.split(",");
                        this.customData.linkData = { cx: this.currentX, cy: this.currentY, labelName: values[0].toString(), styleIndex: parseInt(values[1]), tokenIndex: this.tokenIndex };
                    } else {
                        this.customData.linkData = { cx: this.currentX, cy: this.currentY, labelName: value, tokenIndex: this.tokenIndex, styleIndex: -1 };
                    }
                }
            } else {
                result = super.processControlToken(token, formattingOnly);
            }
                
            
            return result;
        }
    }
    
    gs.Component_MessageTextRenderer = MessageTextRendererMessageTokens;
}());