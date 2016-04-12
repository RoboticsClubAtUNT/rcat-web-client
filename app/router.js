import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  didTransition() {
    this._super();
    window.scrollTo(0,0);
  }
});

Router.map(function() {
  this.route('about');
  this.route('constitution');
  this.route('guides');
  this.route('blog');
  this.route('guide', {'path': '/guides/:id'});
  this.route('signup');
  this.route('calendar');
});

export default Router;
