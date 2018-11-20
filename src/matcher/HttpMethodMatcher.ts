'use strict';

import { Matcher } from "../matcher/Matcher";
import { Stub } from "../stub/Stub";

export class HttpMethodMatcher implements Matcher {
    
    match(stub: Stub, method: string): Boolean {
        console.log('Attempting to match: ' + method + ' to: ' + stub.request.method);
        return stub.request.method === method;
    }
}