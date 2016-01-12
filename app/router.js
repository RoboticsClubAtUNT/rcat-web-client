import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('constitution');
  this.route('guides');
  this.route('blog');
  this.route('guide', {'path': '/guides/:id'});
});

export default Router;
