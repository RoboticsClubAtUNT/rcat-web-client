import Ember from 'ember';

export default Ember.Component.extend({

  src: "../rcat_loop_video.mp4",
  autoplay: true,
  actions: {
    ready(player, component) {
      component.bindPropertyToPlayer(player, 'src');
      player.play();
      player.loop(true);
      // player.fluid(true);
    }
  },

  didRender() {
    this.set('videoIsReady', true);
  },

  willDestroyElement() {
    this.set('videoIsReady', false);
  }

});
