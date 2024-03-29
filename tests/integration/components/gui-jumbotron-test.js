import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gui-jumbotron', 'Integration | Component | gui jumbotron', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gui-jumbotron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gui-jumbotron}}
      template block text
    {{/gui-jumbotron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
