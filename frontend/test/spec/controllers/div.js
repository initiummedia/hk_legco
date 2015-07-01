'use strict';

describe('Controller: DivCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DivCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DivCtrl = $controller('DivCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
