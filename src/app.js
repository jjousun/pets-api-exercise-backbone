import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Pet from 'app/models/pet.js';
import PetView from 'app/views/pet_view.js';
import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

var myPetList = new PetList();
myPetList.fetch();

$(document).ready(function() {
  var myPetListView = new PetListView( {
    model: myPetList,
    template: _.template($('#pet-card-template').html()),
    el: 'main'
  });
  myPetListView.render();

});
