var SceneManager,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SceneManager = (function(superClass) {
  extend(SceneManager, superClass);


  /**
  * Manages the scenes of the game.
  *
  * @module gs
  * @class SceneManager
  * @memberof gs
  * @constructor
   */

  function SceneManager() {
    SceneManager.__super__.constructor.apply(this, arguments);

    /**
    * The current scene.
    * @property scene
    * @type gs.Object_Base
     */
    this.scene = null;

    /**
    * An array of previous scenes. Used to jump back to last scene from a menu for example.
    * @property previousScenes
    * @type gs.Object_Base
     */
    this.previousScenes = [];

    /**
    * The next scene. If set, this scene will become the current scene after next update.
    * @property nextScene
    * @type gs.Object_Base
     */
    this.nextScene = null;

    /**
    * The transition-data like the graphic, vague, etc. used for a transition from one scene to another.
    * @property transitionData
    * @type Object
     */
    this.transitionData = {
      graphic: null,
      duration: 20,
      vague: 30
    };
    this.input = true;

    /**
    * Called if a scene-change has been done.
    * @property callback
    * @type Function
     */
    this.callback = null;
    this.paused = false;
  }

  SceneManager.prototype.initialize = function() {};


  /**
  * Switches from the current scene to the specified one.
  *
  * @method switchTo
  * @param {gs.Object_Base} scene - The new scene.
  * @param {boolean} savePrevious - Indicates if the current scene should be pushed to previous-scene stack instead
  * of getting disposed. It is possible to switch back to that scene then using gs.SceneManager.returnToPrevious method.
  * @param {Function} callback - Called after the scene has been changed.
   */

  SceneManager.prototype.switchTo = function(scene, savePrevious, callback) {
    this.callback = callback;
    if (savePrevious) {
      this.previousScenes.push(this.scene);
    } else if (this.previousScenes.length === 0) {
      gs.Audio.reset();
    }
    if (this.scene != null) {
      this.removeObject(this.scene);
    }
    this.nextScene = scene;
    return Graphics.freeze();
  };


  /**
  * Clears the stack of previous-scenes and disposes all previous-scenes. After that it is not
  * possible to go back to a previous scene using gs.SceneManager.returnToPrevious().
  *
  * @method clear
   */

  SceneManager.prototype.clear = function() {
    var i, len, ref, scene;
    ref = this.previousScenes;
    for (i = 0, len = ref.length; i < len; i++) {
      scene = ref[i];
      scene.dispose();
    }
    return this.previousScenes = [];
  };


  /**
  * Returns to the previous scene if that scene was saved before.
  *
  * @method returnToPrevious
  * @param {Function} callback - Called after the scene has been changed.
   */

  SceneManager.prototype.returnToPrevious = function(callback) {
    var scene;
    this.callback = callback;
    if (this.previousScenes.length > 0) {
      scene = this.previousScenes.pop();
      if (this.scene != null) {
        this.removeObject(this.scene);
      }
      if (scene != null) {
        this.nextScene = scene;
        return Graphics.freeze();
      }
    }
  };


  /**
  * Updates the current scene and the scene-handling. Needs to be called once
  * per frame.
  *
  * @method update
   */

  SceneManager.prototype.update = function() {
    var ref;
    if (this.nextScene !== this.scene) {
      Input.clear();
      if (this.scene != null) {
        if (this.previousScenes.indexOf(this.scene) === -1) {
          this.scene.dispose();
        } else {
          this.scene.behavior.show(false);
        }
      }
      this.scene = this.nextScene;
      if (typeof this.callback === "function") {
        this.callback();
      }
      if (this.scene) {
        this.addObject(this.scene);
        this.scene.loading = true;
        this.scene.loadingData = true;
        this.scene.loadingResources = true;
        if ((this.scene != null) && !this.scene.initialized) {
          this.scene.behavior.initialize();
          this.scene.behavior.prepareLoadingScreen();
          this.isFadeOut = true;
        } else if ((ref = this.scene) != null ? ref.initialized : void 0) {
          this.scene.behavior.show(true);
          this.scene.update();
        }
        Graphics.update();
        this.scene.behavior.transition();
      } else {
        Graphics.freeze();
        Graphics.update();
        Graphics.transition(30);
        this.isFadeOut = true;
      }
    }
    if (this.isFadeOut && Graphics.frozen) {
      Graphics.update();
      return Input.update();
    } else {
      if (this.isFadeOut) {
        AudioManager.stopAllSounds();
        this.isFadeOut = false;
        if (this.scene) {
          Graphics.freeze();
        } else {
          gs.Application.exit();
        }
      }
      DataManager.update();
      ResourceManager.update();
      if (RecordManager.initialized) {
        AudioManager.update();
      }
      if (Graphics.frozen) {
        Input.update();
      }
      return SceneManager.__super__.update.call(this);
    }
  };

  return SceneManager;

})(gs.ObjectManager);

window.SceneManager = new SceneManager();

gs.SceneManager = window.SceneManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLElBQUEsWUFBQTtFQUFBOzs7QUFBTTs7OztBQUNGOzs7Ozs7Ozs7RUFRYSxzQkFBQTtJQUNULCtDQUFBLFNBQUE7O0FBRUE7Ozs7O0lBS0EsSUFBQyxDQUFBLEtBQUQsR0FBUzs7QUFFVDs7Ozs7SUFLQSxJQUFDLENBQUEsY0FBRCxHQUFrQjs7QUFFbEI7Ozs7O0lBS0EsSUFBQyxDQUFBLFNBQUQsR0FBYTs7QUFFYjs7Ozs7SUFLQSxJQUFDLENBQUEsY0FBRCxHQUFrQjtNQUFFLE9BQUEsRUFBUyxJQUFYO01BQWlCLFFBQUEsRUFBVSxFQUEzQjtNQUErQixLQUFBLEVBQU8sRUFBdEM7O0lBRWxCLElBQUMsQ0FBQSxLQUFELEdBQVM7O0FBQ1Q7Ozs7O0lBS0EsSUFBQyxDQUFBLFFBQUQsR0FBWTtJQUVaLElBQUMsQ0FBQSxNQUFELEdBQVU7RUF2Q0Q7O3lCQTBDYixVQUFBLEdBQVksU0FBQSxHQUFBOzs7QUFFWjs7Ozs7Ozs7Ozt5QkFTQSxRQUFBLEdBQVUsU0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixRQUF0QjtJQUNOLElBQUMsQ0FBQSxRQUFELEdBQVk7SUFDWixJQUFHLFlBQUg7TUFDSSxJQUFDLENBQUEsY0FBYyxDQUFDLElBQWhCLENBQXFCLElBQUMsQ0FBQSxLQUF0QixFQURKO0tBQUEsTUFFSyxJQUFHLElBQUMsQ0FBQSxjQUFjLENBQUMsTUFBaEIsS0FBMEIsQ0FBN0I7TUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQVQsQ0FBQSxFQURDOztJQUdMLElBQUcsa0JBQUg7TUFDSSxJQUFDLENBQUEsWUFBRCxDQUFjLElBQUMsQ0FBQSxLQUFmLEVBREo7O0lBR0EsSUFBQyxDQUFBLFNBQUQsR0FBYTtXQUViLFFBQVEsQ0FBQyxNQUFULENBQUE7RUFaTTs7O0FBY1Y7Ozs7Ozs7eUJBTUEsS0FBQSxHQUFPLFNBQUE7QUFDSCxRQUFBO0FBQUE7QUFB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LElBQUcsYUFBYSxDQUFDLFdBQWpCO1FBQ0ksWUFBWSxDQUFDLE1BQWIsQ0FBQSxFQURKOztNQUdBLElBQUcsUUFBUSxDQUFDLE1BQVo7UUFDSSxLQUFLLENBQUMsTUFBTixDQUFBLEVBREo7O2FBR0EsdUNBQUEsRUFyQko7O0VBcENJOzs7O0dBaEhlLEVBQUUsQ0FBQzs7QUE2SzlCLE1BQU0sQ0FBQyxZQUFQLEdBQTBCLElBQUEsWUFBQSxDQUFBOztBQUMxQixFQUFFLENBQUMsWUFBSCxHQUFrQixNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiNcbiMgICBTY3JpcHQ6IFNjZW5lTWFuYWdlclxuI1xuIyAgICQkQ09QWVJJR0hUJCRcbiNcbiMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgZ3MuT2JqZWN0TWFuYWdlclxuICAgICMjIypcbiAgICAqIE1hbmFnZXMgdGhlIHNjZW5lcyBvZiB0aGUgZ2FtZS5cbiAgICAqXG4gICAgKiBAbW9kdWxlIGdzXG4gICAgKiBAY2xhc3MgU2NlbmVNYW5hZ2VyXG4gICAgKiBAbWVtYmVyb2YgZ3NcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICMjI1xuICAgIGNvbnN0cnVjdG9yOiAtPlxuICAgICAgICBzdXBlclxuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIFRoZSBjdXJyZW50IHNjZW5lLlxuICAgICAgICAqIEBwcm9wZXJ0eSBzY2VuZVxuICAgICAgICAqIEB0eXBlIGdzLk9iamVjdF9CYXNlXG4gICAgICAgICMjIyBcbiAgICAgICAgQHNjZW5lID0gbnVsbFxuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEFuIGFycmF5IG9mIHByZXZpb3VzIHNjZW5lcy4gVXNlZCB0byBqdW1wIGJhY2sgdG8gbGFzdCBzY2VuZSBmcm9tIGEgbWVudSBmb3IgZXhhbXBsZS5cbiAgICAgICAgKiBAcHJvcGVydHkgcHJldmlvdXNTY2VuZXNcbiAgICAgICAgKiBAdHlwZSBncy5PYmplY3RfQmFzZVxuICAgICAgICAjIyMgXG4gICAgICAgIEBwcmV2aW91c1NjZW5lcyA9IFtdXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogVGhlIG5leHQgc2NlbmUuIElmIHNldCwgdGhpcyBzY2VuZSB3aWxsIGJlY29tZSB0aGUgY3VycmVudCBzY2VuZSBhZnRlciBuZXh0IHVwZGF0ZS5cbiAgICAgICAgKiBAcHJvcGVydHkgbmV4dFNjZW5lXG4gICAgICAgICogQHR5cGUgZ3MuT2JqZWN0X0Jhc2VcbiAgICAgICAgIyMjIFxuICAgICAgICBAbmV4dFNjZW5lID0gbnVsbFxuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIFRoZSB0cmFuc2l0aW9uLWRhdGEgbGlrZSB0aGUgZ3JhcGhpYywgdmFndWUsIGV0Yy4gdXNlZCBmb3IgYSB0cmFuc2l0aW9uIGZyb20gb25lIHNjZW5lIHRvIGFub3RoZXIuXG4gICAgICAgICogQHByb3BlcnR5IHRyYW5zaXRpb25EYXRhXG4gICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICMjIyBcbiAgICAgICAgQHRyYW5zaXRpb25EYXRhID0geyBncmFwaGljOiBudWxsLCBkdXJhdGlvbjogMjAsIHZhZ3VlOiAzMCB9XG4gICAgICAgIFxuICAgICAgICBAaW5wdXQgPSB5ZXNcbiAgICAgICAgIyMjKlxuICAgICAgICAqIENhbGxlZCBpZiBhIHNjZW5lLWNoYW5nZSBoYXMgYmVlbiBkb25lLlxuICAgICAgICAqIEBwcm9wZXJ0eSBjYWxsYmFja1xuICAgICAgICAqIEB0eXBlIEZ1bmN0aW9uXG4gICAgICAgICMjIyBcbiAgICAgICAgQGNhbGxiYWNrID0gbnVsbFxuICAgICAgICBcbiAgICAgICAgQHBhdXNlZCA9IG5vXG4gICAgICAgIFxuICAgIFxuICAgIGluaXRpYWxpemU6IC0+XG4gICAgICAgICAgICBcbiAgICAjIyMqXG4gICAgKiBTd2l0Y2hlcyBmcm9tIHRoZSBjdXJyZW50IHNjZW5lIHRvIHRoZSBzcGVjaWZpZWQgb25lLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc3dpdGNoVG9cbiAgICAqIEBwYXJhbSB7Z3MuT2JqZWN0X0Jhc2V9IHNjZW5lIC0gVGhlIG5ldyBzY2VuZS5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2F2ZVByZXZpb3VzIC0gSW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IHNjZW5lIHNob3VsZCBiZSBwdXNoZWQgdG8gcHJldmlvdXMtc2NlbmUgc3RhY2sgaW5zdGVhZFxuICAgICogb2YgZ2V0dGluZyBkaXNwb3NlZC4gSXQgaXMgcG9zc2libGUgdG8gc3dpdGNoIGJhY2sgdG8gdGhhdCBzY2VuZSB0aGVuIHVzaW5nIGdzLlNjZW5lTWFuYWdlci5yZXR1cm5Ub1ByZXZpb3VzIG1ldGhvZC5cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGVkIGFmdGVyIHRoZSBzY2VuZSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgICMjI1xuICAgIHN3aXRjaFRvOiAoc2NlbmUsIHNhdmVQcmV2aW91cywgY2FsbGJhY2spIC0+XG4gICAgICAgIEBjYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAgIGlmIHNhdmVQcmV2aW91c1xuICAgICAgICAgICAgQHByZXZpb3VzU2NlbmVzLnB1c2goQHNjZW5lKVxuICAgICAgICBlbHNlIGlmIEBwcmV2aW91c1NjZW5lcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgZ3MuQXVkaW8ucmVzZXQoKVxuICAgIFxuICAgICAgICBpZiBAc2NlbmU/XG4gICAgICAgICAgICBAcmVtb3ZlT2JqZWN0KEBzY2VuZSlcbiAgICAgICAgICAgIFxuICAgICAgICBAbmV4dFNjZW5lID0gc2NlbmVcbiAgICAgICAgXG4gICAgICAgIEdyYXBoaWNzLmZyZWV6ZSgpXG4gICAgXG4gICAgIyMjKlxuICAgICogQ2xlYXJzIHRoZSBzdGFjayBvZiBwcmV2aW91cy1zY2VuZXMgYW5kIGRpc3Bvc2VzIGFsbCBwcmV2aW91cy1zY2VuZXMuIEFmdGVyIHRoYXQgaXQgaXMgbm90XG4gICAgKiBwb3NzaWJsZSB0byBnbyBiYWNrIHRvIGEgcHJldmlvdXMgc2NlbmUgdXNpbmcgZ3MuU2NlbmVNYW5hZ2VyLnJldHVyblRvUHJldmlvdXMoKS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgIyMjICAgIFxuICAgIGNsZWFyOiAtPlxuICAgICAgICBmb3Igc2NlbmUgaW4gQHByZXZpb3VzU2NlbmVzXG4gICAgICAgICAgc2NlbmUuZGlzcG9zZSgpXG4gICAgICAgIEBwcmV2aW91c1NjZW5lcyA9IFtdXG4gICAgIFxuICAgICMjIypcbiAgICAqIFJldHVybnMgdG8gdGhlIHByZXZpb3VzIHNjZW5lIGlmIHRoYXQgc2NlbmUgd2FzIHNhdmVkIGJlZm9yZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHJldHVyblRvUHJldmlvdXNcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGVkIGFmdGVyIHRoZSBzY2VuZSBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgICMjIyAgICBcbiAgICByZXR1cm5Ub1ByZXZpb3VzOiAoY2FsbGJhY2spIC0+XG4gICAgICAgIEBjYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAgIGlmIEBwcmV2aW91c1NjZW5lcy5sZW5ndGggPiAwXG4gICAgICAgICAgICBzY2VuZSA9IEBwcmV2aW91c1NjZW5lcy5wb3AoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiBAc2NlbmU/XG4gICAgICAgICAgICAgICAgQHJlbW92ZU9iamVjdChAc2NlbmUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiBzY2VuZT9cbiAgICAgICAgICAgICAgICBAbmV4dFNjZW5lID0gc2NlbmVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBHcmFwaGljcy5mcmVlemUoKVxuICAgICBcbiAgICAjIyMqXG4gICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIGFuZCB0aGUgc2NlbmUtaGFuZGxpbmcuIE5lZWRzIHRvIGJlIGNhbGxlZCBvbmNlXG4gICAgKiBwZXIgZnJhbWUuXG4gICAgKlxuICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAjIyMgICBcbiAgICB1cGRhdGU6IC0+XG4gICAgICAgIGlmIEBuZXh0U2NlbmUgIT0gQHNjZW5lXG4gICAgICAgICAgICBJbnB1dC5jbGVhcigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIEBzY2VuZT9cbiAgICAgICAgICAgICAgICBpZiBAcHJldmlvdXNTY2VuZXMuaW5kZXhPZihAc2NlbmUpID09IC0xXG4gICAgICAgICAgICAgICAgICAgIEBzY2VuZS5kaXNwb3NlKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIEBzY2VuZS5iZWhhdmlvci5zaG93KG5vKVxuICAgICAgICAgICAgICAgICAgICAjQHNjZW5lLnVwZGF0ZSgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBzY2VuZSA9IEBuZXh0U2NlbmVcbiAgICAgICAgICAgIEBjYWxsYmFjaz8oKVxuICAgXG4gICAgICAgICAgICBpZiBAc2NlbmVcbiAgICAgICAgICAgICAgICBAYWRkT2JqZWN0KEBzY2VuZSlcbiAgICAgICAgICAgICAgICBAc2NlbmUubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICBAc2NlbmUubG9hZGluZ0RhdGEgPSB0cnVlXG4gICAgICAgICAgICAgICAgQHNjZW5lLmxvYWRpbmdSZXNvdXJjZXMgPSB0cnVlXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIEBzY2VuZT8gYW5kIG5vdCBAc2NlbmUuaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICAgICAgQHNjZW5lLmJlaGF2aW9yLmluaXRpYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICBAc2NlbmUuYmVoYXZpb3IucHJlcGFyZUxvYWRpbmdTY3JlZW4oKVxuICAgICAgICAgICAgICAgICAgICBAaXNGYWRlT3V0ID0geWVzXG4gICAgICAgICAgICAgICAgZWxzZSBpZiBAc2NlbmU/LmluaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgICAgIEBzY2VuZS5iZWhhdmlvci5zaG93KHllcylcbiAgICAgICAgICAgICAgICAgICAgQHNjZW5lLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgR3JhcGhpY3MudXBkYXRlKClcbiAgICAgICAgICAgICAgICBAc2NlbmUuYmVoYXZpb3IudHJhbnNpdGlvbigpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgR3JhcGhpY3MuZnJlZXplKClcbiAgICAgICAgICAgICAgICBHcmFwaGljcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIEdyYXBoaWNzLnRyYW5zaXRpb24oMzApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAaXNGYWRlT3V0ID0geWVzXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgQGlzRmFkZU91dCBhbmQgR3JhcGhpY3MuZnJvemVuXG4gICAgICAgICAgICBHcmFwaGljcy51cGRhdGUoKVxuICAgICAgICAgICAgSW5wdXQudXBkYXRlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaWYgQGlzRmFkZU91dFxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmRzKClcbiAgICAgICAgICAgICAgICBAaXNGYWRlT3V0ID0gbm9cbiAgICAgICAgICAgICAgICBpZiBAc2NlbmVcbiAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3MuZnJlZXplKClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGdzLkFwcGxpY2F0aW9uLmV4aXQoKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLnVwZGF0ZSgpXG4gICAgICAgICAgICBSZXNvdXJjZU1hbmFnZXIudXBkYXRlKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgUmVjb3JkTWFuYWdlci5pbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci51cGRhdGUoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgR3JhcGhpY3MuZnJvemVuXG4gICAgICAgICAgICAgICAgSW5wdXQudXBkYXRlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgIFxuICAgICAgICAgICAgXG5cbndpbmRvdy5TY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyKClcbmdzLlNjZW5lTWFuYWdlciA9IHdpbmRvdy5TY2VuZU1hbmFnZXIiXX0=
//# sourceURL=SceneManager_36.js