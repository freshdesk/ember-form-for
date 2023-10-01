import layout from '../../../templates/components/form-fields/checkbox-group/option';

import { humanize } from '../../../utils/strings';

import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { or } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import { dasherize } from '@ember/string';

export default Component.extend({
  tagName: '',
  layout,

  config: service('ember-form-for/config'),

  modelName: or('object.modelName', 'object.constructor.modelName'),

  labelText: computed('value', 'label', 'labelI18nKey', 'i18n.locale', function() {
    let i18n = get(this, 'i18n');
    let label = get(this, 'label');

    if (isPresent(label)) {
      return label;
    } else if (isPresent(i18n)) {
      return i18n.t(get(this, 'labelI18nKey'));
    } else {
      return get(this, 'label') || humanize(get(this, 'value'));
    }
  }),

  labelI18nKey: computed('config.i18nKeyPrefix', 'modelName', 'propertyName', 'value', function() {
    let value = get(this, 'value');

    if (isPresent(value)) {
      value = dasherize(value.toString());
    }

    return [
      get(this, 'config.i18nKeyPrefix'),
      dasherize(get(this, 'modelName') || ''),
      dasherize(get(this, 'propertyName') || ''),
      value
    ].filter((x) => !!x)
      .join('.');
  })
});
