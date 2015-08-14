'use strict';

describe('Service: LegcoApi', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var LegcoApi;
  beforeEach(inject(function (_LegcoApi_) {
    LegcoApi = _LegcoApi_;
  }));

  it('should do something', function () {
    expect(!!LegcoApi).toBe(true);
  });

});
