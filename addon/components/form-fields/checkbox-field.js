import layout from '../../templates/components/form-fields/checkbox-field';
import Component from '@ember/component';
import { set } from '@ember/object';


const CheckboxFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-checkbox',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

CheckboxFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default CheckboxFieldComponent;
