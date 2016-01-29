import Ember from 'ember';

export default Ember.Component.extend({

  src: "../rcat_loop_video.mp4",
  autoplay: true,
  actions: {
    ready(player, component) {
      component.bindPropertyToPlayer(player, 'src');
      player.play();
      player.loop(true);
      // player.poster("../imgs/motherboard.jpg");
      // player.fluid(true);
    }
  },

  didInsertElement() {
    var windowWidth = this.$(window).width();
    // switch to menu mode
    if (windowWidth <= 650) {
      this.set('windowIsSmall', true);
    } else {
      this.set('windowIsSmall', false);
    }
  },

  didRender() {
    this.set('videoIsReady', true);
  },


  willDestroyElement() {
    this.set('videoIsReady', false);
  }

});
