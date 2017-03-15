import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gui-article-slideshow', 'Integration | Component | gui article slideshow', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gui-article-slideshow}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gui-article-slideshow}}
      template block text
    {{/gui-article-slideshow}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
