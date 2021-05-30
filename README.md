# Forge 

```
Deploying your app to the development environment.
Press Ctrl+C to cancel.

Running forge lint...
No issues found.

▶️  GraphQL https://api.atlassian.com/graphql
Query: 
      query app($id: ID!) {
        app(id: $id) {
          environments {
            key
            installations {
              id
              installationContext,
              version {
                isLatest
              }
            }
          }
        }
      }
    
Variables: {
  "id": "ari:cloud:ecosystem::app/eadd5f9c-d15b-4a8f-88e0-3f0f92a1e788"
}
◀️  GraphQL
Request ID: f6c909e547b06bb2
Result: {
  "app": {
    "environments": [
      {
        "key": "staging",
        "installations": []
      },
      {
        "key": "production",
        "installations": []
      },
      {
        "key": "default",
        "installations": []
      }
    ]
  }
}
Deploying sample to development...

ℹ Packaging app files

Error: Bundling failed: ./src/index.js
Module not found: Error: Can't resolve 'jose/jwk/parse' in '/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src'
resolve 'jose/jwk/parse' in '/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src'
  Parsed request is a module
  using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./src)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/github.com/announce/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/github.com/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/node_modules doesn't exist or is not a directory
      /Users/node_modules doesn't exist or is not a directory
      /node_modules doesn't exist or is not a directory
      looking for modules in /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules
        using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./node_modules)
          Field 'browser' doesn't contain a valid alias configuration
      looking for modules in /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules
        using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/package.json (relative path: ./node_modules)
          Field 'browser' doesn't contain a valid alias configuration
          using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./node_modules/jose/jwk/parse)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
          using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/package.json (relative path: ./node_modules/jose/jwk/parse)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.tsx doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.tsx doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.js doesn't exist
            .jsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.js doesn't exist
            .jsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.jsx doesn't exist
            .json
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.jsx doesn't exist
            .json
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.json doesn't exist
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.json doesn't exist
            as directory
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse doesn't exist
            as directory
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse doesn't exist
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src/node_modules]
[/Users/kyamamoto/src/github.com/announce/node_modules]
[/Users/kyamamoto/src/github.com/node_modules]
[/Users/kyamamoto/src/node_modules]
[/Users/kyamamoto/node_modules]
[/Users/node_modules]
[/node_modules]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.ts]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.ts]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.tsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.tsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.js]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.js]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.jsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.jsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.json]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.json]
 @ ./src/index.js 1:0-42 5:23-31

Error: Bundling failed: ./src/index.js
Module not found: Error: Can't resolve 'jose/jwk/parse' in '/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src'
resolve 'jose/jwk/parse' in '/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src'
  Parsed request is a module
  using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./src)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/github.com/announce/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/github.com/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/src/node_modules doesn't exist or is not a directory
      /Users/kyamamoto/node_modules doesn't exist or is not a directory
      /Users/node_modules doesn't exist or is not a directory
      /node_modules doesn't exist or is not a directory
      looking for modules in /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules
        using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./node_modules)
          Field 'browser' doesn't contain a valid alias configuration
      looking for modules in /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules
        using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/package.json (relative path: ./node_modules)
          Field 'browser' doesn't contain a valid alias configuration
          using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/package.json (relative path: ./node_modules/jose/jwk/parse)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
          using description file: /Users/kyamamoto/src/github.com/announce/forge-admin-kit/package.json (relative path: ./node_modules/jose/jwk/parse)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.tsx doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.tsx doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.js doesn't exist
            .jsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.js doesn't exist
            .jsx
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.jsx doesn't exist
            .json
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.jsx doesn't exist
            .json
              Field 'browser' doesn't contain a valid alias configuration
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.json doesn't exist
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.json doesn't exist
            as directory
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse doesn't exist
            as directory
              /Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse doesn't exist
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/src/node_modules]
[/Users/kyamamoto/src/github.com/announce/node_modules]
[/Users/kyamamoto/src/github.com/node_modules]
[/Users/kyamamoto/src/node_modules]
[/Users/kyamamoto/node_modules]
[/Users/node_modules]
[/node_modules]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.ts]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.ts]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.tsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.tsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.js]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.js]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.jsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.jsx]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/sample/node_modules/jose/jwk/parse.json]
[/Users/kyamamoto/src/github.com/announce/forge-admin-kit/node_modules/jose/jwk/parse.json]
 @ ./src/index.js 1:0-42 5:23-31
    at AppPackager.package (/Users/kyamamoto/.nvm/versions/node/v12.20.1/lib/node_modules/@forge/cli/out/deploy/packager/packager.js:38:19)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```
