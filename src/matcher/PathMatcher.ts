'use strict';

import { Matcher } from "../matcher/Matcher";
import { Stub } from "../stub/Stub";

export class PathMatcher implements Matcher {
    
    match(stub: Stub, path: string): Boolean {
        console.log('Attempting to match: ' + stub.request.path + ' to: ' + path);
        return stub.request.path === path;
    }
}