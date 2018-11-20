'use strict';

import { PathMatcher } from "../../src/matcher/PathMatcher";
import { Stub } from '../../src/stub/Stub';
import { Request } from '../../src/stub/Request';
import { expect } from 'chai';

describe('Path Matchers tests', () => {

    let sut: PathMatcher;

    beforeEach(() => {
        sut = new PathMatcher();
    });

    it('should return true when sut attempts to match path: /test/route to /test/route', () => {
        let stub = new Stub(new Request(null, '/test/route', null, null), null, 0);

        expect(sut.match(stub, '/test/route')).to.equal(true);
    });

    it('should return false when sut attempts to match path: /test to /test/route', () => {
        let stub = new Stub(new Request(null, '/test', null, null), null, 0);

        expect(sut.match(stub, '/test/route')).to.equal(false);
    });

    it('should return false when sut calls with a null value.', () => {
        let stub = new Stub(new Request(null, null, null, null), null, 0)

        expect(sut.match(stub, '/test')).to.equal(false);
    });

});
