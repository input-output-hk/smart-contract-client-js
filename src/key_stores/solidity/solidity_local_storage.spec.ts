import { expect, use } from 'chai'
import { buildSolidityLocalStorageKeyStore } from './solidity_local_storage'
import { initializeWeb3 } from './util/web3'

const KNOWN_PRIVATE_KEY = '0x3651c5734db0a6f8200e984bee045ec4440052bb7af9676467d19b13d55518cf'
const web3 = initializeWeb3('ws://localhost:8545')

describe('Solidity Local Storage Key Store', function () {
  describe('Initialization', () => {
    it('can be bootstrapped with an existing private key', () => {
      expect(() => {
        buildSolidityLocalStorageKeyStore(web3,
          { privateKey: KNOWN_PRIVATE_KEY }
        )
      }).to.not.throw()
    })
    it('will generate a new key pair if no private key is provided', () => {
      const keyStore = buildSolidityLocalStorageKeyStore(web3)
      return expect(keyStore.publicKey).to.exist
    })
  })
})
