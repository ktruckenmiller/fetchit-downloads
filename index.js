'use strict';
const Hapi = require('hapi');
const Path = require('path');
const server = new Hapi.Server();
const AWS = require('aws-sdk')
const _ = require('lodash')

var s3 = new AWS.S3();
var params = {
  Bucket: "fetchit"
 };

server.connection({ port: 4000 });
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        console.log('boston')
          reply.file('./public/index.html');
      }
    });
    server.route({
      method: 'GET',
      path: '/static/{param*}',
      handler: {
          directory: {
              path: 'public/static'
          }
      }
    });
    server.route({
      method: 'GET',
      path: '/windows',
      handler: function (request, reply) {
        params = _.assignIn(params, {Prefix: 'alpha/windows'})
        s3.listObjectsV2(params, function(err, data) {
          if (err) {
            console.log(err, err.stack);
          } else {
            reply(data);
            console.log(data);
          }
        });

      }
    });
    server.route({
        method: 'GET',
        path: '/linux',
        handler: function (request, reply) {
          params = _.assignIn(params, {Prefix: 'alpha/linux'})
          s3.listObjectsV2(params, function(err, data) {

            if (err) {
              console.log(err, err.stack);
            } else {
              reply(data);
              console.log(data);
            }
          });
        }
    });
    server.route({
        method: 'GET',
        path: '/mac',
        handler: function (request, reply) {
          params = _.assignIn(params, {Prefix: 'alpha/mac'})
          s3.listObjectsV2(params, function(err, data) {
            if (err) {
              console.log(err, err.stack);
            } else {
              reply(data);
              console.log(data);
            }
          });
        }
    });
});
