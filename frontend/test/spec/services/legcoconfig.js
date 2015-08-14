'use strict';

describe('Service: LegcoConfig', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var LegcoConfig;
  beforeEach(inject(function (_LegcoConfig_) {
    LegcoConfig = _LegcoConfig_;
  }));

  it('should do something', function () {
    expect(!!LegcoConfig).toBe(true);
  });

});
