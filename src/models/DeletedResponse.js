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
    // AMD. Register as an anonymous module.
    define(['/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intellidrone_api_client_js) {
      root.intellidrone_api_client_js = {};
    }
    root.intellidrone_api_client_js.DeletedResponse = factory(root.intellidrone_api_client_js.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DeletedResponse model module.
   * @module /models/DeletedResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeletedResponse</code>.
   * @alias module:/models/DeletedResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DeletedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:/models/DeletedResponse} obj Optional instance to populate.
   * @return {module:/models/DeletedResponse} The populated <code>DeletedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  };

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;


  return exports;
}));


