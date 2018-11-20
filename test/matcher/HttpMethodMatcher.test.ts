'use strict';

import { HttpMethodMatcher } from "../../src/matcher/HttpMethodMatcher";
import { HttpMethods } from '../../src/model/HttpMethods';
import { Stub } from '../../src/stub/Stub';
import { Request } from '../../src/stub/Request';
import { expect } from 'chai';

describe('Http method Matchers tests', () => {

    let sut: HttpMethodMatcher;

    beforeEach(() => {
        sut = new HttpMethodMatcher();
    });

    it('should return true when sut attempts to match method: GET to GET', () => {
        let stub = new Stub(new Request(HttpMethods.GET, null, null, null), null, 0);

        expect(sut.match(stub, HttpMethods.GET)).to.equal(true);
    });

    it('should return false when sut attempts to match method: POST to GET', () => {
        let stub = new Stub(new Request(HttpMethods.GET, null, null, null), null, 0);

        expect(sut.match(stub, HttpMethods.POST)).to.equal(false);
    });

    it('should return false when sut attempts to match a null method', () => {
        let stub = new Stub(new Request(null, null, null, null), null, 0);

        expect(sut.match(stub, HttpMethods.GET)).to.equal(false)
    });

});
