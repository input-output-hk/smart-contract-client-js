import { provider } from 'web3-providers'
const Web3 = require('web3')

export function initializeWeb3 (provider: provider = 'ws://localhost:8545') {
  return new Web3(provider)
}

export function initializeAccount (web3: any, privateKey: string) {
  if (privateKey) return web3.eth.accounts.privateKeyToAccount(privateKey)
  return web3.eth.accounts.create()
}
