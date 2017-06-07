'use strict';

import {Matchers} from '../src/matcher/Matchers';
import {Stub} from '../src/stub/Stub';
import {Request} from '../src/stub/Request';
import {expect} from 'chai';

describe('Matchers test', () => {

    let sut: Matchers;

    beforeEach(() => {
        sut = new Matchers();
    });

    describe('matchHttpBody', () => {
        it('should return true when sut attempts to match body: {"some":"value"} to: {"some":"value"}', () => {
            let stub = new Stub(new Request(null, null, null, '{"some": "value"}'), null, 0);

            expect(sut.matchBody(stub, '{"some":"value"}')).to.equal(true);
        });

        it('should return true when sut attempts to match body: {"some":"value", "other":"value"} to: {"some":"value"}', () => {
            let stub = new Stub(new Request(null, null, null, '{"some": "value"}'), null, 0);

            expect(sut.matchBody(stub, '{"some":"value", "other":"value"}')).to.equal(true);
        })
    });

    describe('matchHttpMethod', () => {
        it('should return true when sut attempts to match method: GET to GET', () => {
            let stub = new Stub(new Request('GET', null, null, null), null, 0);

            expect(sut.matchHttpMethod(stub, 'GET')).to.equal(true);
        });

        it('should return false when sut attempts to match method: POST to GET', () => {
            let stub = new Stub(new Request('GET', null, null, null), null, 0);

            expect(sut.matchHttpMethod(stub, 'POST')).to.equal(false);
        });

        it('should return false when sut attempts to match a null method', () => {
            let stub = new Stub(new Request(null, null,null, null), null, 0);

            expect(sut.matchHttpMethod(stub, 'GET')).to.equal(false)
        })
    });

    describe('matchPath', () => {
        it('should return true when sut attempts to match path: /test/route to /test/route', () => {
            let stub = new Stub(new Request(null, '/test/route', null, null), null, 0);

            expect(sut.matchPath(stub, '/test/route')).to.equal(true);
        });

        it('should return false when sut attempts to match path: /test to /test/route', () => {
            let stub = new Stub(new Request(null, '/test', null, null), null, 0);

            expect(sut.matchPath(stub, '/test/route')).to.equal(false);
        });

        it('should return false when sut calls with a null value.', () => {
            let stub = new Stub(new Request(null, null, null, null), null, 0)

            expect(sut.matchPath(stub, '/test')).to.equal(false);
        });
    });

    describe('matchHttpHeaders', () => {
        it('should return true when sut attempts to match header: "custom-header":"value" to "custom-header":"value"', () => {
            let stub = new Stub(new Request(null, null, { 'custom-header': 'value' }, null), null, 0);

            expect(sut.matchHttpHeaders(stub, { 'custom-header': 'value' })).to.equal(true)
        });

        it('should return false when sut attempts to match header: "custom-header":"value" to "custom":"value"', () => {
            let stub = new Stub(new Request(null, null, { 'custom': 'value' }, null), null, 0);

            expect(sut.matchHttpHeaders(stub, { 'custom-header': 'value' })).to.equal(false)
        });
    });
});