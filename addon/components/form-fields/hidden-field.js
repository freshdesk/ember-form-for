import layout from '../../templates/components/form-fields/hidden-field';

import Component from '@ember/component';
import { set } from '@ember/object';

const HiddenFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-hidden',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

HiddenFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default HiddenFieldComponent;
