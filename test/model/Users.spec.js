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
    instance = new intellidrone_api_client_js.Users();
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

  describe('Users', function() {
    it('should create an instance of Users', function() {
      // uncomment below and update the code to test Users
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be.a(intellidrone_api_client_js.Users);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

    it('should have the property lotes (base name: "lotes")', function() {
      // uncomment below and update the code to test the property lotes
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      // var instance = new intellidrone_api_client_js.Users();
      // expect(instance).to.be();
    });

  });

}));
