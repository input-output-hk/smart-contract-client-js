import { KeyStore } from '../../KeyStore'
import { initializeAccount } from './util/web3'

type Options = {
  privateKey?: string
}

export function buildSolidityLocalStorageKeyStore (web3: any, opts?: Options): KeyStore {
  const { privateKey, address: publicKey } = initializeAccount(web3, opts && opts.privateKey)
  return {
    publicKey,
    async signTransaction (tx) {
      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
      return signedTx.rawTransaction
    }
  }
}
