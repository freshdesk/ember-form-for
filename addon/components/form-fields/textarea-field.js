import layout from '../../templates/components/form-fields/textarea-field';

import Component from '@ember/component';
import { set } from '@ember/object';

const TextareaFieldComponent = Component.extend({
  tagName: '',
  layout,

  control: 'one-way-textarea',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextareaFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextareaFieldComponent;
