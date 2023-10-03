import layout from '../templates/components/fields-for';
import Component from '@ember/component';
import { set } from '@ember/object';

const FieldsForComponent = Component.extend({
  layout,

  tagName: '',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

FieldsForComponent.reopenClass({
  positionalParams: ['object']
});

export default FieldsForComponent;
