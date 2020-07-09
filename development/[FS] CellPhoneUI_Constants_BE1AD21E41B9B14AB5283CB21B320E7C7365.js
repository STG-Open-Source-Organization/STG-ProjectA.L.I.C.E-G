/**
 * Layouts\[FS] CellPhoneUI_Constants
 * Redefines constants from the original Layouts\Constants and adds some new
 * ones. Customize them here!
 */

(function(){
    class DesktopUIConstants {
        static initClass() {
            this.OPTION_BUTTON_W = 78;
            this.OPTION_BUTTON_H = 78;
            this.OPTION_BUTTON_L_IMAGE_ON = "m-checkbox-large-on";
            this.OPTION_BUTTON_L_IMAGE_OFF = "m-checkbox-large-off";
            this.OPTION_BUTTON_S_IMAGE_ON = "m-checkbox-small-on";
            this.OPTION_BUTTON_S_IMAGE_OFF = "m-checkbox-small-off";
            this.OPTION_BUTTON_MSG_IMAGE_ON = "msg-checkbox-small-on";
            this.OPTION_BUTTON_MSG_IMAGE_OFF = "msg-checkbox-small-off";
            this.SLIDER_TRACK_H = 3;
            this.TEXT_FONT = "Power Clear";
            this.TEXT_SIZE_SMALL = 20;
            this.TEXT_SIZE_MESSAGE = 30;
            this.TEXT_SIZE_MESSAGE_NAME = 25;
            this.TEXT_COLOR_NORMAL = [0, 0, 0, 255];
            this.TEXT_COLOR_SPECIAL = [0, 0, 255, 255];
            this.LAYOUT_SETTINGS_WINDOW_W = 630;
            this.LAYOUT_SETTINGS_WINDOW_X = Graphics.width - this.LAYOUT_SETTINGS_WINDOW_W - 190;
            this.LAYOUT_SETTINGS_VOICES_WINDOW_X = 720;
            this.LAYOUT_SETTINGS_VOICES_WINDOW_W = 540;
            this.LAYOUT_SETTINGS_WINDOW_LABEL_W = 80;
            this.CG_GALLERY_CONTENT_WIDTH = (Math.floor((Graphics.width-260-(Graphics.width - (Graphics.width - 200))) / 175) * 175) + 20;
            this.MESSAGE_BOX_IDS = ["messageBox", "nvlMessageBox"];
            //Styles
            
        }
    }
    DesktopUIConstants.initClass();
    gs.DesktopUIConstants = gs.UIConstants = DesktopUIConstants;
}());