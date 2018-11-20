'use strict';

import {Stub} from '../stub/Stub';

export interface Matcher {
    match(stub: Stub, value: any): Boolean;
}