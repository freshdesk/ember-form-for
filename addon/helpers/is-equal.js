import isEqual from '../utils/is-equal';
import { helper } from '@ember/component/helper';

export default helper(([a, b]) => isEqual(a, b));
