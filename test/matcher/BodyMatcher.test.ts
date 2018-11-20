'use strict';

import { BodyMatcher } from "../../src/matcher/BodyMatcher";
import { Stub } from '../../src/stub/Stub';
import { Request } from '../../src/stub/Request';
import { expect } from 'chai';

describe('body Matchers tests', () => {

    let sut: BodyMatcher;

    beforeEach(() => {
        sut = new BodyMatcher();
    });

    it('should return true when sut attempts to match body: {"some":"value"} to: {"some":"value"}', () => {
        const stub = new Stub(new Request(null, null, null, '{"some": "value"}'), null, 0);

        expect(sut.match(stub, { "some": "value" })).to.equal(true);
    });

    it('should return true when sut attempts to match body: {"some":"value", "other":"value"} to: {"some":"value"}', () => {
        const stub = new Stub(new Request(null, null, null, '{"some": "value"}'), null, 0);

        expect(sut.match(stub, { "some": "value", "other": "value" })).to.equal(true);
    })

    it('should return false when sut attempts to match body: {} to: {"some":"value"}', () => {
        const stub = new Stub(new Request(null, null, null, '{"some": "value"}'), null, 0);

        expect(sut.match(stub, {})).to.equal(false);
    })

});
