import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('constitution-viewer', 'Integration | Component | constitution viewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{constitution-viewer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#constitution-viewer}}
      template block text
    {{/constitution-viewer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
