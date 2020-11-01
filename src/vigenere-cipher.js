const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var encryptWord = '';
    for (var i = 0; i < message.length; i++) {
      while (alphabet.indexOf(message.charAt(i)) === -1) {
        encryptWord += message.charAt(i);
        message =
          message.substring(0, i) + message.substring(i + 1, message.length);
      }
      if (message.charAt(i) !== '') {
        encryptWord += alphabet.charAt(
          (alphabet.indexOf(message.charAt(i)) +
            alphabet.indexOf(key.charAt(i % key.length))) %
            alphabet.length
        );
      }
    }
    return this.isDirect
      ? encryptWord.toUpperCase()
      : encryptWord.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error();
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var decryptWord = '';
    for (var i = 0; i < encryptedMessage.length; i++) {
      while (alphabet.indexOf(encryptedMessage.charAt(i)) === -1) {
        decryptWord += encryptedMessage.charAt(i);
        encryptedMessage =
          encryptedMessage.substring(0, i) +
          encryptedMessage.substring(i + 1, encryptedMessage.length);
      }
      if (encryptedMessage.charAt(i) !== '') {
        decryptWord += alphabet.charAt(
          (alphabet.indexOf(encryptedMessage.charAt(i)) +
            alphabet.length -
            alphabet.indexOf(key.charAt(i % key.length))) %
            alphabet.length
        );
      }
    }
    return this.isDirect
      ? decryptWord.toUpperCase()
      : decryptWord.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
