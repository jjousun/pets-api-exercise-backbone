import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from '../models/pet.js';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.$el.addClass(params.class);
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template({pet: this.model.toJSON()});

    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    "click button.alert": "deletePet",
    // "click button.success": "toggleComplete"
  },
  deletePet: function() {
    this.model.destroy();
  },
});

export default PetView;
