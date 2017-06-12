import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PetView from './pet_view';
import Pet from '../models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log(this.el);
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$("#pet-list").empty();
    var that = this;

    this.model.each(function(pet) {
      var petView = new PetView( {
        model: pet,
        template: that.template,
      });
      that.$('#pet-list').append(petView.render().$el);
    });

    return this;
  },
  events: {
    "click #add-pet" : "addPet"
  },
  getFormData: function() {
    var formName = this.$("#name").val();
    this.$("#name").val('');

    var formBreed = this.$("#breed").val();
    this.$("#breed").val('');

    var formAge = this.$("#age").val();
    this.$("#age").val('');

    var formDescription = this.$("#description").val();
    this.$("#description").val('');

    var formVaccinated = this.$('#vaccinated-checkbox').is(":checked");
    this.$('#vaccinated-checkbox').prop('checked', false);

    return {
      name: formName,
      breed: formBreed,
      age: formAge,
      description: formDescription,
      vaccinate: formVaccinated
    };
  },
  addPet: function() {
    var pet = new Pet(this.getFormData());

    this.model.create(pet);
  }
});

export default PetListView;
