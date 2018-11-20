'use strict';

import { Matcher } from "../matcher/Matcher";
import { Stub } from "../stub/Stub";
import { IncomingHttpHeaders } from 'http2';
import { StubActivationMatcher } from './StubActivationMatcher';

export class HeaderMatcher implements Matcher {

    private stubActivationMatcher: StubActivationMatcher;

    constructor(stubActivationMatcher: StubActivationMatcher = new StubActivationMatcher()) {
        this.stubActivationMatcher = stubActivationMatcher;
    }

    match(stub: Stub, headers: IncomingHttpHeaders): Boolean {
        console.log("Headers from config" + stub.request.headers)
        console.log("Headers from request:" + headers);

        if (this.stubActivationMatcher.isActivated(stub, 'headers')) {
            var match: boolean;

            for (let key in stub.request.headers) {
                console.log(key + ' should be inside header string: ' + headers.toString());
                match = headers[key] != null
            }

            return match;
        } else {
            return true;
        }
    }
}