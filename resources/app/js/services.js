'use strict';

/* Services */

var myAppServices = angular.module('myApp.services', []);

// Demonstrate how to register services
// In this case it is a simple value service.
myAppServices.value('version', '0.1');
