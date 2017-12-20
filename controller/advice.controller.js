'use strict';

exports.error404 = function(req, res) {
  res.status(404);
  res.send( null );
};

exports.adviceError = function(statusCode, req, res){
	res.status(statusCode);
	res.send( {} );
}