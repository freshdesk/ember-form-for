import layout from '../../templates/components/form-fields/radio-group';
import Component from '@ember/component';
import { set } from '@ember/object';

const RadioGroupComponent = Component.extend({
  tagName: '',
  layout,

  update() {
    set(...arguments);
  }
});

RadioGroupComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default RadioGroupComponent;
