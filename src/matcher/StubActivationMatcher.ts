'use strict';

import { HttpMethods } from "../model/HttpMethods";
import { Stub } from "../stub/Stub";

export class StubActivationMatcher {
    public isActivated(stub: Stub, identifier: String): Boolean {
        switch (identifier) {
            case 'body':
                return stub.request.method != HttpMethods.GET && stub.request.body.length > 0
            case 'headers':
                return stub.request.headers != null
            default:
                return false;
        }
    };
}