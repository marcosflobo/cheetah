'use strict';

angular.module('cheetahApp.version', [
  'cheetahApp.version.interpolate-filter',
  'cheetahApp.version.version-directive'
])

.value('version', '0.1');
