import layout from '../../templates/components/form-fields/custom-field';
import Component from '@ember/component';
import { set } from '@ember/object';

const CustomFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-input',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CustomFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CustomFieldComponent;
