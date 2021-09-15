require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain unfold good sleep frame gaze'; 
let testAccounts = [
"0x102c0c472cb4892b3585c0907ac63472c13665c926059e470882cb75e3015522",
"0xbafcba6d4e996ec7f1a46a22a9653066b8c60aa0a4f2594afbbcce57af86cd68",
"0xc6538a6ce52ae5725987bce986f05988365ef11b9e8846d04ce9984ee359edd2",
"0x384b7e56eef60200fbf14bafdd5a33917e8a31d3a5a06ad6b02ba38622459937",
"0x2042d40dc9b46420de0f3a0cd2647f0b367527721adfabf23306c29efeefa478",
"0x28e4d0c2221736e8310c99a447c9a791970520626cca374a22da755fbf5ae221",
"0x90cee4435a77f7ed8343eee120bb7126943cfafa5a231853b1ca2bd703c8fc42",
"0x3e0a6a790406ef62bb4ba1ced13904417651e6e09309f2c38f2b6e66dbf114b1",
"0x09e25f2ed636a9c0f940345d012f50b43d7dddd69724fcd1a2b65da4ca6f4350",
"0xd5ba32467856efc531b42cf2bc4cf06c23aacdb9886b2b9a1b01d4e56e989f8d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


