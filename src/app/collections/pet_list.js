import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  url: "http://petdibs.herokuapp.com/pets"
});

export default PetList;
