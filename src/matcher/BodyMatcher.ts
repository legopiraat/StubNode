'use strict';

import { Matcher } from "../matcher/Matcher";
import { Stub } from "../stub/Stub";
import { StubActivationMatcher } from './StubActivationMatcher';

export class BodyMatcher implements Matcher {

    private stubActivationMatcher: StubActivationMatcher;

    constructor(stubActivationMatcher: StubActivationMatcher = new StubActivationMatcher()) {
        this.stubActivationMatcher = stubActivationMatcher;
    }

    match(stub: Stub, body: Object): Boolean {
        if (this.stubActivationMatcher.isActivated(stub, 'body')) {
            let stubKeys = Object.keys(JSON.parse(stub.request.body));
            let bodyKeys = Object.keys(body);

            return stubKeys.every(key => {
                return bodyKeys.indexOf(key) > -1
            });
        } else {
            return true;
        }
    }
}