var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('FBC0B6DB'), //todo
  addressVersion: 0x07, // address prefix 7
  privKeyVersion: 0x36, //private key prefix
  P2SHVersion: 5, // multisig prefix
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('919ce8917d622ee9bc3d7509c67649a9ece9d335567ebe53626f8ed3daebbf0b'),
    merkle_root: hex('76728498264a7b317e0ee404779ce0c479effa0cb962e169abbcadd51287dfbc'),
    height: 1,
    nonce: 136192,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1454807215,
    bits: '1e0ffff0',
  },
  dnsSeeds: [
    '52.34.40.255',
    '52.33.110.112',
  
  ],
  defaultClientPort: 6094
};

exports.mainnet = exports.livenet;

exports.testnet = {  //not setup for Number7 yet
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 265310,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1392281929,
    bits: 486604799,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
