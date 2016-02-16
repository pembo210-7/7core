var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('37ac4869'), // 0x68 0x7a 0xf0 0x1e 
  addressVersion: 0x0f, // address prefix 7
  privKeyVersion: 0x36, //private key prefix
  P2SHVersion: 5, // multisig prefix
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('efd9c88dd860aece5888265af5db624afc82e849469777c44cbfae808dc1221a'),
    merkle_root: hex('6cfb8e718d27dc516fbaddf4fc532e39643ff0317556d322f85191e5fab9a3c2'),
    height: 0,
    nonce: 1734121,
    version: 0,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1454799127,
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
