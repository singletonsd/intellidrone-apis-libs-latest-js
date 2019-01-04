/**
 * Intellidrone API
 * This ios Intellidrone API designed by [Singleton](http://singleton.com.ar).You  can find out more about Swagger at [Singleton Web Page](http://singleton.com.ar) or on [Intellidrone Web Page](http://robotagro.com).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: soporte@singleton.com.ar
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intellidrone_api_client_js);
  }
}(this, function(expect, intellidrone_api_client_js) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intellidrone_api_client_js.VacasApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  };

  describe('VacasApi', function() {
    describe('addVaca', function() {
      it('should call addVaca successfully', function(done) {
        // uncomment below and update the code to test addVaca
        // instance.addVaca(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done();
      });
    });
    describe('deleteVaca', function() {
      it('should call deleteVaca successfully', function(done) {
        // uncomment below and update the code to test deleteVaca
        // instance.deleteVaca(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done();
      });
    });
    describe('editVaca', function() {
      it('should call editVaca successfully', function(done) {
        // uncomment below and update the code to test editVaca
        // instance.editVaca(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done();
      });
    });
    describe('getVacas', function() {
      it('should call getVacas successfully', function(done) {
        // uncomment below and update the code to test getVacas
        // instance.getVacas(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done();
      });
    });
    describe('getVacasById', function() {
      it('should call getVacasById successfully', function(done) {
        // uncomment below and update the code to test getVacasById
        // instance.getVacasById(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done();
      });
    });
  });

}));
