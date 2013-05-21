// create a global Vent object, and extend it with Backbone event model (with the help //of underscore.js - which is Backbone dependency ):
var Vent = _.extend({},Backbone.Events);

// create a basic model
var Model = Backbone.Model.extend({
    defaults: {
        name:"Hello from the Backbone Custom Event Pattern",
    }
});

// create a view for that model
var ModelView = Backbone.View.extend({
    tagName: "h4",
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.model.get("name"));
        return this;
    }
});

// create a route
var Route = Backbone.Router.extend({
    routes: {
        "home": "showHome"
    },
    showHome: function(){
        Vent.trigger("init");
    }
});

// create instances
var model = new Model;
var modelView = new ModelView({model:model});
new Route;

// append everything to the DOM, with the help of custom global event:
Vent.on("init",function(){
    $(document.body).append(modelView.el);
});

// start a history
Backbone.history.start();

