// Generated by CoffeeScript 1.12.7
(function() {
  var Component;

  Component = (function() {

    /**
    * The base class of all components. A component defines a certain piece of
    * game logic. 
    *
    * @module gs
    * @class Component
    * @memberof gs
    * @constructor
     */
    function Component() {

      /**
      * The associated game object. A component only be part of one game object at the same time.
      * @property object
      * @type gs.Object_Base
      * @default null
       */
      this.object = null;

      /**
      * Indicates if the component is disposed. A disposed component cannot be used anymore.
      * @property disposed
      * @type boolean
      * @default false
       */
      this.disposed = false;

      /**
      * An optional unique id. The component can be accessed through this ID using the gs.Object_Base.findComponentById method.
      * @property id
      * @type string
      * @default null
       */
      this.id = null;

      /**
      * An optional name. The component can be found through its name using the gs.Object_Base.findComponentsByName method. Multiple
      * components can have the same name. So the name can also be used to categorize components.
      * @property name
      * @type string
      * @default ""
       */
      this.name = "";

      /**
      * Indicates if the component is setup.
      * @property isSetup
      * @type boolean
      * @default no
       */
      this.isSetup = false;
    }


    /**
    * Called when the component is added to a new object.
    * @method setup
     */

    Component.prototype.setup = function() {
      return this.isSetup = true;
    };


    /**
    * Disposes the component. The component will be removed from the game object
    * automatically.
    * @method dispose
     */

    Component.prototype.dispose = function() {
      return this.disposed = true;
    };


    /**
    * Updates the component. Needs to be implemented in derived class.
    * @method update
     */

    Component.prototype.update = function() {};

    return Component;

  })();

  gs.Component = Component;

}).call(this);
