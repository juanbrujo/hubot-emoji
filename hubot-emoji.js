// Description:
//  Hubot emoji find & replace from a given string
//
// Dependencies:
//  emoji-alphabet
//
// Commands:
//  hubot emoji <query>

var alphabet = require('emoji-alphabet').alphabet;

function getRandom( arr ) {
  if (arr.constructor === Array) {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  } else {
    return arr;
  }
}

module.exports = function(robot) {
  return robot.respond(/emoji (\w+)$/i, function(msg) {

    var i, len, letter, ref, str;
    str = [];
    ref = msg.match[1].toUpperCase().split("");

    for (i = 0, len = ref.length; i < len; i++) {
      letter = ref[i];

      if (alphabet[letter]) {
        str.push( getRandom(alphabet[letter]) );
      } else {
        str.push(letter);
      }
    }

    msg.send(str.join(""));

  });
};