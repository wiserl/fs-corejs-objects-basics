import Test from 'ava';

import * as Assignemnt from '../src';

Test(`Engine_Types is accessible`, t => {
  t.truthy(Assignemnt.ENGINE_TYPES);
});
