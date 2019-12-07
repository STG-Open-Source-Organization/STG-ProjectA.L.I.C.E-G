// Generated by CoffeeScript 1.12.7
(function() {
  var Component_UIBehavior,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_UIBehavior = (function(superClass) {
    extend(Component_UIBehavior, superClass);


    /**
    * Called if this object instance is restored from a data-bundle. It can be used
    * re-assign event-handler, anonymous functions, etc.
    * 
    * @method onDataBundleRestore.
    * @param Object data - The data-bundle
    * @param gs.ObjectCodecContext context - The codec-context.
     */

    Component_UIBehavior.prototype.onDataBundleRestore = function(data, context) {
      return this.setupEventHandlers();
    };


    /**
    * @module ui
    * @class Component_UIBehavior
    * @extends gs.Component
    * @memberof ui
    * @constructor
     */

    function Component_UIBehavior() {
      this.breakChainAt = null;
      this.containsPointer = false;
      this.isAnimating = false;
      this.viewData_ = [true, false, false, true, false];
      this.nextKeyObjectId = "";
      this.nextKeyObject_ = null;
      this.prevKeyObject_ = null;
    }

    Component_UIBehavior.accessors("nextKeyObject", {
      set: function(v) {
        this.nextKeyObject_ = v;
        if (v) {
          return v.ui.prevKeyObject_ = this.object;
        }
      },
      get: function() {
        return this.nextKeyObject_;
      }
    });

    Component_UIBehavior.accessors("prevKeyObject", {
      set: function(v) {
        this.prevKeyObject_ = v;
        if (v) {
          return v.ui.nextKeyObject_ = this.object;
        }
      },
      get: function() {
        return this.prevKeyObject_;
      }
    });

    Component_UIBehavior.accessors("selected", {
      set: function(v) {
        if (v !== this.viewData_[2]) {
          this.viewData_[2] = v;
          return this.updateStyle();
        }
      },
      get: function() {
        return this.viewData_[2];
      }
    });

    Component_UIBehavior.accessors("hover", {
      set: function(v) {
        if (v !== this.viewData_[1]) {
          this.viewData_[1] = v;
          return this.updateStyle();
        }
      },
      get: function() {
        return this.viewData_[1];
      }
    });

    Component_UIBehavior.accessors("enabled", {
      set: function(v) {
        if (v !== this.viewData_[3]) {
          this.viewData_[3] = v;
          return this.updateStyle();
        }
      },
      get: function() {
        return this.viewData_[3];
      }
    });

    Component_UIBehavior.accessors("focused", {
      set: function(v) {
        if (v !== this.viewData_[4]) {
          this.viewData_[4] = v;
          return this.updateStyle();
        }
      },
      get: function() {
        return this.viewData_[4];
      }
    });

    Component_UIBehavior.accessors("viewData", {
      set: function(v) {
        if (v !== this.viewData_) {
          this.viewData_ = v;
          return this.updateStyle();
        }
      },
      get: function() {
        return this.viewData_;
      }
    });


    /**
    * Prepares the UI-Object for display. This method should be called
    * before a new created UI-Object will be displayed to position all
    * sub-elements correctly.
    *
    * @method prepare
     */

    Component_UIBehavior.prototype.prepare = function() {
      var scene;
      scene = SceneManager.scene;
      scene.preparing = true;
      this.object.update();
      this.object.update();
      scene.preparing = false;
      return this.object.events.emit("uiPrepareFinish");
    };


    /**
    * Executes an animation defined for the specified event. Each UI-Object
    * can have animations for certain events defined in JSON.
    *
    * @param {string} event - The event to execute the animation for such as "onTerminate" or "onInitialize". If
    * no animation has been defined for the specified event, nothing will happen and the callback will be called 
    * immediately.
    * @param {Function} callback - An optional callback function called when the animation ends.
    * @method executeAnimation
     */

    Component_UIBehavior.prototype.executeAnimation = function(event, callback) {
      var animation, i, len, object, ref, ref1;
      this.isAnimating = true;
      this.disappearCounter = this.object.subObjects.length + 1;
      this.disappearCallback = callback;
      ref = this.object.subObjects;
      for (i = 0, len = ref.length; i < len; i++) {
        object = ref[i];
        if (object.ui) {
          object.ui.executeAnimation(event, (function(_this) {
            return function(sender) {
              _this.disappearCounter--;
              if (_this.disappearCounter === 0) {
                _this.isAnimating = false;
                return typeof _this.disappearCallback === "function" ? _this.disappearCallback(_this.object) : void 0;
              }
            };
          })(this));
        } else {
          this.disappearCounter--;
        }
      }
      animation = (ref1 = this.object.animations) != null ? ref1.first(function(a) {
        return a.events.indexOf(event) !== -1;
      }) : void 0;
      if (animation) {
        return this.object.animationExecutor.execute(animation, (function(_this) {
          return function(sender) {
            _this.disappearCounter--;
            if (_this.disappearCounter === 0) {
              _this.isAnimating = false;
              return typeof _this.disappearCallback === "function" ? _this.disappearCallback(_this.object) : void 0;
            }
          };
        })(this));
      } else {
        this.disappearCounter--;
        if (this.disappearCounter === 0) {
          this.isAnimating = false;
          return typeof this.disappearCallback === "function" ? this.disappearCallback(this.object) : void 0;
        }
      }
    };


    /**
    * Executes the animation defined for the "onInitialize" event. Each UI-Object
    * can have animations for certain events defined in JSON.
    *
    * @param {Function} callback - An optional callback function called when the animation ends.
    * @method appear
     */

    Component_UIBehavior.prototype.appear = function(callback) {
      var cb;
      gs.GlobalEventManager.emit("uiAnimationStart");
      cb = (function(_this) {
        return function(sender) {
          gs.GlobalEventManager.emit("uiAnimationFinish");
          return typeof callback === "function" ? callback(sender) : void 0;
        };
      })(this);
      return this.executeAnimation("onInitialize", cb);
    };


    /**
    * Executes the animation defined for the "onTerminate" event. Each UI-Object
    * can have animations for certain events defined in JSON.
    *
    * @param {Function} callback - An optional callback function called when the animation ends.
    * @method disappear
     */

    Component_UIBehavior.prototype.disappear = function(callback) {
      var cb;
      gs.GlobalEventManager.emit("uiAnimationStart");
      cb = (function(_this) {
        return function(sender) {
          gs.GlobalEventManager.emit("uiAnimationFinish");
          return typeof callback === "function" ? callback(sender) : void 0;
        };
      })(this);
      return this.executeAnimation("onTerminate", cb);
    };


    /**
    * Disposes the component.
    *
    * @method dispose
     */

    Component_UIBehavior.prototype.dispose = function() {
      Component_UIBehavior.__super__.dispose.apply(this, arguments);
      gs.GlobalEventManager.offByOwner("mouseUp", this.object);
      gs.GlobalEventManager.offByOwner("objectGotFocus", this.object);
      gs.GlobalEventManager.offByOwner("keyUp", this.object);
      gs.GlobalEventManager.offByOwner("mouseDown", this.object);
      return gs.GlobalEventManager.offByOwner("mouseMoved", this.object);
    };


    /**
    * Adds event-handlers for mouse/touch events
    *
    * @method setupEventHandlers
     */

    Component_UIBehavior.prototype.setupEventHandlers = function() {
      if (this.object.focusable) {
        gs.GlobalEventManager.on("objectGotFocus", ((function(_this) {
          return function(e) {
            if (e.sender !== _this.object) {
              return _this.blur();
            }
          };
        })(this)), null, this.object);
        gs.GlobalEventManager.on("keyUp", ((function(_this) {
          return function(e) {
            if (_this.focused) {
              if (_this.nextKeyObject && (Input.release(Input.KEY_DOWN) || Input.release(Input.KEY_RIGHT))) {
                _this.nextKeyObject.ui.focus();
                return e.breakChain = true;
              } else if (_this.prevKeyObject && (Input.release(Input.KEY_UP) || Input.release(Input.KEY_LEFT))) {
                _this.prevKeyObject.ui.focus();
                return e.breakChain = true;
              }
            }
          };
        })(this)), null, this.object);
      }
      if (this.object.styles.first((function(s) {
        return s.selector === 1;
      }))) {
        gs.GlobalEventManager.on("mouseMoved", ((function(_this) {
          return function(e) {
            var contains;
            if (!_this.enabled) {
              return;
            }
            contains = Rect.contains(_this.object.dstRect.x, _this.object.dstRect.y, _this.object.dstRect.width, _this.object.dstRect.height, Input.Mouse.x - _this.object.origin.x, Input.Mouse.y - _this.object.origin.y);
            if (_this.containsPointer !== contains || (_this.hover && !contains)) {
              _this.containsPointer = contains;
              _this.object.needsUpdate = true;
              _this.hover = contains;
              _this.updateParentStyle();
              _this.updateChildrenStyle();
            }
            return null;
          };
        })(this)), null, this.object);
      }
      if (this.object.focusable || this.object.styles.first((function(s) {
        return s.selector === 2 || s.selector === 4;
      }))) {
        return gs.GlobalEventManager.on("mouseDown", ((function(_this) {
          return function(e) {
            var contains, group, i, len, object;
            if (!_this.enabled || Input.Mouse.buttons[Input.Mouse.LEFT] !== 1) {
              return;
            }
            contains = Rect.contains(_this.object.dstRect.x, _this.object.dstRect.y, _this.object.dstRect.width, _this.object.dstRect.height, Input.Mouse.x - _this.object.origin.x, Input.Mouse.y - _this.object.origin.y);
            if (contains) {
              _this.object.needsUpdate = true;
              _this.focus();
              if (_this.object.selectable) {
                if (_this.object.group) {
                  _this.selected = true;
                  group = gs.ObjectManager.current.objectsByGroup(_this.object.group);
                  for (i = 0, len = group.length; i < len; i++) {
                    object = group[i];
                    if (object !== _this.object) {
                      object.ui.selected = false;
                    }
                  }
                } else {
                  _this.selected = !_this.selected;
                }
              } else {
                _this.updateStyle();
              }
              _this.updateParentStyle();
            }
            return null;
          };
        })(this)), null, this.object, 0);
      }
    };


    /**
    * Initializes the binding-handler.
    * 
    * @method setup
     */

    Component_UIBehavior.prototype.setup = function() {
      return this.setupEventHandlers();
    };


    /**
    * Gives the input focus to this UI object. If the UI object is not focusable, nothing will happen.
    * 
    * @method focus
     */

    Component_UIBehavior.prototype.focus = function() {
      if (this.object.focusable && !this.focused) {
        this.focused = true;
        this.updateChildrenStyle();
        return gs.GlobalEventManager.emit("objectGotFocus", this.object);
      }
    };


    /**
    * Removes the input focus from this UI object. If the UI object is not focusable, nothing will happen.
    * 
    * @method blur
     */

    Component_UIBehavior.prototype.blur = function() {
      if (this.object.focusable && this.focused) {
        this.focused = false;
        this.updateChildrenStyle();
        return gs.GlobalEventManager.emit("objectLostFocus", this.object);
      }
    };

    Component_UIBehavior.prototype.updateParentStyle = function() {
      var parent, ref;
      parent = this.object.parent;
      while (parent) {
        if ((ref = parent.ui) != null) {
          ref.updateStyle();
        }
        parent = parent.parent;
      }
      return null;
    };

    Component_UIBehavior.prototype.updateChildrenStyle = function() {
      var control, i, len, ref;
      if (this.object.controls) {
        ref = this.object.controls;
        for (i = 0, len = ref.length; i < len; i++) {
          control = ref[i];
          if (control && control.ui) {
            control.ui.updateStyle();
            control.ui.updateChildrenStyle();
          }
        }
      }
      return null;
    };

    Component_UIBehavior.prototype.updateStyle = function() {
      var base, i, j, len, len1, object, objects, ref, ref1, style;
      if (this.object.styles) {
        ref = this.object.styles;
        for (i = 0, len = ref.length; i < len; i++) {
          style = ref[i];
          if (!this.viewData_[style.selector]) {
            style.revert(this.object);
          }
        }
        ref1 = this.object.styles;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          style = ref1[j];
          if (style.target === -1) {
            if (this.viewData_[style.selector]) {
              style.apply(this.object);
            }
          } else {
            objects = this.object.parentsByStyle[style.target];
            if (objects) {
              object = objects[0];
              if (object && object.ui.viewData_[style.selector]) {
                style.apply(this.object);
              }
            }
          }
        }
        if (this.object.font) {
          if (typeof (base = this.object.behavior).refresh === "function") {
            base.refresh();
          }
        }
      }
      return null;
    };


    /**
    * Updates the binding-handler.
    * 
    * @method update
     */

    Component_UIBehavior.prototype.update = function() {
      if (this.nextKeyObjectId && !this.nextKeyObject) {
        return this.nextKeyObject = gs.ObjectManager.current.objectById(this.nextKeyObjectId);
      }
    };

    return Component_UIBehavior;

  })(gs.Component);

  ui.Component_UIBehavior = Component_UIBehavior;

}).call(this);
