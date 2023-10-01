import layout from '../templates/components/form-errors';
import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',

  limitedErrors: computed('errors.[]', 'maxErrors', function() {
    let errors = get(this, 'errors');
    let maxErrors = get(this, 'maxErrors');

    if (maxErrors) {
      return errors.slice(0, maxErrors);
    }

    return errors;
  }),

  joinedErrorClasses: computed('errorClasses', function() {
    return (get(this, 'errorClasses') || []).join(' ');
  })
});
