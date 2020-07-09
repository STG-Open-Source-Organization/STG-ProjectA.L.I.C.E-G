(function() {
    gs.Component_LayoutSceneBehavior.prototype.quickSave = function(sender, params) {
        GameManager.quickSave();
    };
    
    gs.Component_LayoutSceneBehavior.prototype.quickLoad = function(sender, params) {
        GameManager.quickLoad();
    };
    
    gs.Component_LayoutSceneBehavior = LayoutSceneBehaviorQuickSave;
}());