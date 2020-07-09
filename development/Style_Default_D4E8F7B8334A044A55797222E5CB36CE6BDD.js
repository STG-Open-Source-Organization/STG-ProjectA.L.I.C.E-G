/**
 * [FS] Cell Phone UI\Layouts\Styles\Style_Default
 * Edits to the original Layouts\Styles\Style_Default
 */

/*
 * Category name which is displayed on the left side in some settings menus like the audio
 * settings.
 */
ui.UIManager.styles.windowCategoryUIText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": gs.UIConstants.TEXT_SIZE_SMALL,
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

/*
 * Title Screen text used for the big game title
 */
ui.UIManager.styles.gameTitle = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 180,
        "smallCaps": true,
        "italic": false,
        "bold": true,
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL, 
        "outline": {
            "color": gs.UIConstants.TEXT_COLOR_NORMAL,
            "size": 8
        } 
    },
};

/*
 * Title Screen text used for the title screen options like "New Game", etc.
 */
ui.UIManager.styles.titleText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 45,
        "smallCaps": true,
        "italic": false,
        "color": gs.UIConstants.TEXT_COLOR_NORMAL, 
    },
    "anchor": [0.5, 0.5],
    "animations": [ 
        {
            "event": "onMouseEnter",
            "flow": [
                { "type": "zoomTo", "zoom": [110, 110], "duration": 10, "easing": "linear_inout", "wait": true }
            ]
        },
        {
            "event": "onMouseLeave",
            "clear": false,
            "flow": [
                { "type": "zoomTo", "zoom": [100, 100], "duration": 10, "easing": "linear_inout" }
            ]
        }
    ]
};

ui.UIManager.styles["titleText:hover"] = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 45,
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL,
    }
};

ui.UIManager.styles["titleText:focused"] = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 45, 
        "smallCaps": true, 
        "italic": false,
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL, 
        "outline": { "color": gs.UIConstants.TEXT_COLOR_NORMAL, "size": 4 } 
    }
};

ui.UIManager.styles.choiceBoxEntry = {
    "opacity": 180
};

ui.UIManager.styles["choiceBoxEntry:enabled"] = {
    "opacity": 255
};

ui.UIManager.styles.messageOptionButton = {
    "image": gs.UIConstants.OPTION_BUTTON_MSG_IMAGE_OFF,
    "opacity": 100
};

ui.UIManager.styles["messageOptionButton:selected"] = {
    "image": gs.UIConstants.OPTION_BUTTON_MSG_IMAGE_ON,
    "opacity": 255
};

ui.UIManager.styles["messageOptionButton:enabled"] = {
    "opacity": 255
};

ui.UIManager.styles.optionButton = {
    "image": gs.UIConstants.OPTION_BUTTON_L_IMAGE_OFF
};

ui.UIManager.styles["optionButton:selected"] = {
    "image": gs.UIConstants.OPTION_BUTTON_L_IMAGE_ON
};

ui.UIManager.styles.sliderTrack = {
    "color": gs.UIConstants.TEXT_COLOR_NORMAL
};

ui.UIManager.styles.sliderKnob = {
    "image": gs.UIConstants.OPTION_BUTTON_L_IMAGE_OFF
};

ui.UIManager.styles["sliderKnob:hover"] = {
    "image": gs.UIConstants.OPTION_BUTTON_L_IMAGE_ON
};

ui.UIManager.styles.galleryImageFrame = {
    "image": "pixeldropshadow"
};

ui.UIManager.styles["galleryImageFrame:hover"] = {
    "image": "pixelselection"
};

ui.UIManager.styles["galleryImageFrame:selected"] = {
    "image": "pixelselection"
};

ui.UIManager.styles.windowFrame = {
    "image": "pixelskin-frame"
};

ui.UIManager.styles.windowTilePattern = {
    "image": "pixelskin-tile",
    "looping": { "vertical": true, "horizontal": true }
};

ui.UIManager.styles.windowStretchPattern = {
    "image": "pixelskin-stretch"
};

ui.UIManager.styles.windowShadow = {
    "image": "pixeldropshadow",
    "frameCornerSize": 30,
    "frameThickness": 30,
    "padding": [-16, -16, -16, -16],
};

ui.UIManager.styles.selectableWindowShadow = {
    "image": "pixeldropshadow"
};


ui.UIManager.styles["selectableWindowShadow:hover"] = {
    "image": "pixelselection"
};

ui.UIManager.styles.buttonText = {
    "alignmentX": "center",
    "alignmentY": "bottom",
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 25, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

ui.UIManager.styles.cgGalleryImage = {
};

ui.UIManager.styles["cgGalleryImageFrame"] = {
    "image": "pixeldropshadow"
};

ui.UIManager.styles["selectableText"] = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 30, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

ui.UIManager.styles["selectableText:selected"] = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT,
        "size": 30, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL
    }
};

//ui.UIManager.styles["button:hover windowShadow"] =
//{
//    "image": "pixelselection"
//}

ui.UIManager.styles["button"] =
{
};

ui.UIManager.styles["button:focused selectableWindowShadow"] =
{
    "image": "pixelselection"
};



ui.UIManager.styles["cgGalleryImage:hover cgGalleryImageFrame"] = {
    "image": "pixelselection"
};

//ui.UIManager.styles["cgGalleryImage cgGalleryImageFrame"] = {
//    "image": "pixeldropshadow"
//}

//ui.UIManager.styles["cgGalleryImageFrame:hover"] = {
//    "image": "pixelselection"
//}

//ui.UIManager.styles["cgGalleryImageFrame:selected"] = {
//    "image": "pixelselection"
//}

/*
 * Choice Timer text displayed if "Choice Timer" command is used to show a count-down
 * until the choice-selection is done automatically.
 */
ui.UIManager.styles.choiceTimerText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 30, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL,
        "border": true
    }
};

/*
 * Regular Size UI text used in all places for normal-size text / labels.
 */
ui.UIManager.styles.regularUIText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 30, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

ui.UIManager.styles["regularUIText:enabled"] = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 30, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    },
    "opacity": 255
};


/*
 * Small Size UI text used in all places for small-size text / labels.
 */
ui.UIManager.styles.smallUIText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 22, 
        "smallCaps": true, 
        "italic": false, 
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

/*
 * Small Size text used for save-game slot descriptions.
 */
ui.UIManager.styles.saveGameUIText = {
    "font": { 
        "name": gs.UIConstants.TEXT_FONT, 
        "size": 20, 
        "smallCaps": true, 
        "italic": false,
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

/*
 * Regular message text style for use in backlog, etc.
 */
ui.UIManager.styles.messageText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
        "smallCaps": false,
        "italic": false,
        "border": true,
        "borderSize": 4
    }
};

/*
 * Ruby text style. 
 * If size-property is not present, the half of the current font-size is used.
 * If color-property is not present, the current font-color is used.
 */
ui.UIManager.styles.rubyText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "smallCaps": false,
        "italic": false, "border": true,
        "borderSize": 4
    }
};

/*
 * Text for ADV game messages.
 */
ui.UIManager.styles.advMessageText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
        "smallCaps": false,
        "italic": false,
        "outline": {
            "size": 4,
            "color": gs.UIConstants.TEXT_COLOR_NORMAL
        }
    }
};

/*
 * Text for NVL game messages.
 */
ui.UIManager.styles.nvlMessageText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
        "smallCaps": false,
        "italic": false,
        "border": true,
        "borderSize": 4
    }
};

/*
 * Text for custom message areas.
 */
ui.UIManager.styles.customMessageText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE_NAME,
        "smallCaps": false,
        "italic": false,
        "border": true
    },
};

/*
 * Used to display the current character's name.
 */
ui.UIManager.styles.messageBoxNameText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE_NAME,
        "smallCaps": false,
        "italic": false,
        "border": true, "borderSize": 4
    }
};

/*
 * Used for number-input entries showing you the current number you have entered so far.
 */
ui.UIManager.styles.numberInputEntryText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": 90,
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

/*
 * Used for number-input for each single digit.
 */
ui.UIManager.styles.numberInputDigitText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": 35
    }
};

/*
 * Used for text-input entries showing you the current text you have entered so far.
 */
ui.UIManager.styles.textInputEntryText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": 90,
        "color": gs.UIConstants.TEXT_COLOR_NORMAL
    }
};

/*
 * Used for text-input for each single letter.
 */
ui.UIManager.styles.textInputLetterText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": 25
    }
};

/*
 * Defines the color used for the name-column of the message backlog.
 */
ui.UIManager.styles.backlogNamePanel = {
    "color": gs.UIConstants.TEXT_COLOR_SPECIAL
};

/*
 * Defines the color used for the message-column of the message backlog.
 */
ui.UIManager.styles.backlogMessagePanel = {
    "color": [255, 255, 255, 160]
};

/*
 * Defines the font used for the name-column of the message backlog.
 */
ui.UIManager.styles.backlogNameText = {
    "font": {
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE_NAME,
        "smallCaps": false,
        "italic": false,
        "border": true,
        "borderSize": 4
    }
};

/*
 * Defines the color used for sub-areas on a window a category-column,etc.
 */
ui.UIManager.styles["hyperlink"] = {
    "font": {
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL,
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
        "smallCaps": false,
        "italic": false,
        "outline": {
            "size": 4,
            "color": gs.UIConstants.TEXT_COLOR_NORMAL
        }
    }
};

ui.UIManager.styles["hyperlink:hover"] = {
    "font": {
        "color": gs.UIConstants.TEXT_COLOR_SPECIAL,
        "name": gs.UIConstants.TEXT_FONT,
        "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
        "smallCaps": false,
        "italic": false,
        "outline": {
            "size": 4,
            "color": gs.UIConstants.TEXT_COLOR_NORMAL
        }
    }
};

/*
 * Defines the color used for sub-areas on a window a category-column,etc.
 */
ui.UIManager.styles.windowSubPanel = {
    "color": [0, 0, 0, 20]
};

/*
 * Defines the color used for the separator-line to separate a window's title-area from its actual content.
 */
ui.UIManager.styles.windowContentSeparator = {
    "color": [0, 0, 0]
};