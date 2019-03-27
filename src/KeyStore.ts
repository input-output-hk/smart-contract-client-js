export interface KeyStore {
  publicKey: string,
  signTransaction: (tx: any) => Promise<any>
}
