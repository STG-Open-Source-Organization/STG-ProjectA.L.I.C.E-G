// Generated by CoffeeScript 1.12.7
(function() {
  var Component_TintAnimation,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_TintAnimation = (function(superClass) {
    extend(Component_TintAnimation, superClass);


    /**
    * Executes a tint-animation on a game-object. The tint is executed on
    * the game object's tone-property.
    *
    * @module gs
    * @class Component_TintAnimation
    * @extends gs.Component_Animation
    * @memberof gs
    * @constructor
     */

    function Component_TintAnimation(data) {
      Component_TintAnimation.__super__.constructor.apply(this, arguments);
      this.sourceTone = data != null ? data.sourceTone : void 0;
      this.targetTone = data != null ? data.targetTone : void 0;
      this.easing = new gs.Easing(null, data != null ? data.easing : void 0);
      this.callback = null;
    }


    /**
    * Serializes the tint-animation into a data-bundle.
    *
    * @method toDataBundle
     */

    Component_TintAnimation.prototype.toDataBundle = function() {
      return {
        easing: this.easing,
        sourceTone: this.sourceTone,
        targetTone: this.targetTone
      };
    };


    /**
    * Updates the tint-animation.
    *
    * @method update
     */

    Component_TintAnimation.prototype.update = function() {
      var a;
      Component_TintAnimation.__super__.update.apply(this, arguments);
      if (!this.easing.isRunning) {
        return;
      }
      this.easing.updateValue();
      a = this.easing.value;
      this.object.tone.red = Math.floor((this.sourceTone.red * a + this.targetTone.red * (255 - a)) / 255);
      this.object.tone.green = Math.floor((this.sourceTone.green * a + this.targetTone.green * (255 - a)) / 255);
      this.object.tone.blue = Math.floor((this.sourceTone.blue * a + this.targetTone.blue * (255 - a)) / 255);
      this.object.tone.grey = Math.floor((this.sourceTone.grey * a + this.targetTone.grey * (255 - a)) / 255);
      if (!this.easing.isRunning) {
        return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
      }
    };


    /**
    * Starts the tint-animation.
    *
    * @method start
    * @param {gs.Tone} tone The target-tone.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback called if the animation is finished.
     */

    Component_TintAnimation.prototype.start = function(tone, duration, easing, callback) {
      this.callback = callback;
      if (this.object.tone.red === tone.red && this.object.tone.green === tone.green && this.object.tone.blue === tone.blue && this.object.tone.grey === tone.grey) {
        if (typeof this.callback === "function") {
          this.callback(this.object, this);
        }
      }
      if (duration === 0 || this.isInstantSkip()) {
        this.object.tone = tone;
        return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
      } else {
        this.sourceTone = new Tone(this.object.tone);
        this.targetTone = tone;
        this.callback = callback;
        this.easing.type = easing;
        return this.easing.startValue(255, -255, duration);
      }
    };

    return Component_TintAnimation;

  })(gs.Component_Animation);

  gs.Component_TintAnimation = Component_TintAnimation;

}).call(this);
