'use strict';

import { HeaderMatcher } from "../../src/matcher/HeaderMatcher";
import { Stub } from '../../src/stub/Stub';
import { Request } from '../../src/stub/Request';
import { expect } from 'chai';

describe('Header Matchers tests', () => {

    let sut: HeaderMatcher;

    beforeEach(() => {
        sut = new HeaderMatcher();
    });

    it('should return true when sut attempts to match header: "custom-header":"value" to "custom-header":"value"', () => {
        let stub = new Stub(new Request(null, null, { 'custom-header': 'value' }, null), null, 0);

        expect(sut.match(stub, { 'custom-header': 'value' })).to.equal(true)
    });

    it('should return false when sut attempts to match header: "custom-header":"value" to "custom":"value"', () => {
        let stub = new Stub(new Request(null, null, { 'custom': 'value' }, null), null, 0);

        expect(sut.match(stub, { 'custom-header': 'value' })).to.equal(false)
    });

});
