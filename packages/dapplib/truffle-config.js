require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar push hidden crisp fringe sponsor'; 
let testAccounts = [
"0x5374f17a6152a307ef6857719f3a53ac758d637750a8d1e1d70437bc475ab9f3",
"0x38273e60178b510086607f358b63d66f5dec518648598ea1ade55a3415884fe7",
"0xde71ea4073660f0b9e80b64f391f724cba49bda6f3e6b71923cb49c6303b41a9",
"0x907fce9193e27ee68d17b8ad9d2520d7e108d640c5a977913a321be4e1f97265",
"0xec9efff3f6b3975749577a9f7b5bd0a945f46ac203b82779596cc863934d90a3",
"0x664c15c37b995962aa1d6f09ff5d79a4661040542096fc7c285acab9e13e1791",
"0xcd6d64d895ff051d44d7d7f407fc821fb1367b4d4dfbfe3d35d3feadde5f9e8d",
"0x38e75b2a5696fceab96a0dcb81ed14a3e912ff9a4e6c8b1a391d27002c09d750",
"0x1a3c085300960d806a5f358fb1d3568149202d1518080d2ea80b9bc713e5bb55",
"0x13e7ad045984279c4f70b8d82321f7ae8b9f76e4c2956d569bb0a939c665d55c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
