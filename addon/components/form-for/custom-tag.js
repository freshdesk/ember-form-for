import Ember from 'ember';
import layout from '../../templates/components/form-for/custom-tag';
import Component from '@ember/component';

export default Component.extend({
  layout,
  attributeBindings: ['id', 'role']
});
