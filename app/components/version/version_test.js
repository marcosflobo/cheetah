'use strict';

describe('cheetahApp.version module', function() {
  beforeEach(module('cheetahApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
