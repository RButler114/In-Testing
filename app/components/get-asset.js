import Ember from 'ember';

export default Ember.Component.extend({
	sizes: {
    mobile: '(max-width:568px)',
    tablet: '(max-width:768px)',
    desktop: '(min-width:769px)',
  },
  init(){
    Ember.run.scheduleOnce('render', this, this.buildImg);
    this._super(...arguments);
  },
  slugify(text){
    return (text) ? text.toLowerCase().replace(/ /g, '-') : '';
  },
  buildImg: function(){

  }
});
