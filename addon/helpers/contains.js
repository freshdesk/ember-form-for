import { A as emberArray, isArray } from '@ember/array';
import { helper } from '@ember/component/helper';

export function contains([haystack, needle]) {
  if (isArray(haystack)) {
    return emberArray(haystack).includes(needle);
  } else {
    return haystack === needle;
  }
}

export default helper(contains);
