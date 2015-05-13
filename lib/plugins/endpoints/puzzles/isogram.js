'use strict';

var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/puzzles/isogram/{word}',
    config: {
      description: 'Determines if a word is a isogram',
      validate: {
        params: {
          word: Joi.string().required()
        }
      },
      handler: function(request, reply){
        var letters = request.params.word.toLowerCase().split('');
        var histogram = {};

        var isUnique = letters.every(function(c){
          if(!histogram[c]){
            histogram[c] = 1;
            return true;
          }
        });

        return reply({value: isUnique});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'puzzles.isogram'
};
