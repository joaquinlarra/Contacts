'use strict';

exports.error404 = function(req, res) {
  res.status(404);
  res.send( null );
};