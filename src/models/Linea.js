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
    root.intellidrone_api_client_js.Linea = factory(root.intellidrone_api_client_js.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Linea model module.
   * @module /models/Linea
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Linea</code>.
   * @alias module:/models/Linea
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Linea</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:/models/Linea} obj Optional instance to populate.
   * @return {module:/models/Linea} The populated <code>Linea</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('linea_number')) {
        obj['linea_number'] = ApiClient.convertToType(data['linea_number'], 'Number');
      }
      if (data.hasOwnProperty('linea')) {
        obj['linea'] = ApiClient.convertToType(data['linea'], 'String');
      }
    }
    return obj;
  };

  /**
   * @member {Number} linea_number
   */
  exports.prototype['linea_number'] = undefined;
  /**
   * @member {String} linea
   */
  exports.prototype['linea'] = undefined;


  return exports;
}));


