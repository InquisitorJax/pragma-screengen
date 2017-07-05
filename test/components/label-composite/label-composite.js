import {expect, assert} from 'chai';
import 'aurelia-polyfills';
import {ElementMockup} from './../../mockups/element-mockup';
import {LabelComposite} from './../../../src/components/label-composite/label-composite';

describe('LabelComposite Tests', function() {
    let instance;
    let element;

    beforeEach(function() {
        element = new ElementMockup();
        instance = new LabelComposite(element);
    });

    it('constructor', function() {
        expect(instance).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => LabelComposite()).to.throw("Cannot call a class as a function");
    });
});