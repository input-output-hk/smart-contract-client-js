# Smart Contract Client JS

The client connects to the GraphQL server over HTTPS exposed by [the API module](https://github.com/input-output-hk/smart-contract-api), subscribes to transaction signing requests, and with knowledge of the engine can sign and submit it. The instance of Apollo client is exposed for DApp developers to utilise existing Apollo tools for interacting with the API.

```
npm install -S smart-contract-client
// or
yarn add smart-contract-client
```

## Development
TypeScript source, [StandardJS rules enforced using eslint](https://standardjs.com/#can-i-use-a-javascript-language-variant-like-flow-or-typescript)