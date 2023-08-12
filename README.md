# GitHub Sodium (NodeJS)

[![License](https://img.shields.io/badge/License-MIT-808080?style=flat-square "License")](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/github-sodium-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/github-sodium-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/github-sodium-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/github-sodium-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/github-sodium-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/github-sodium-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/github-sodium) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/github-sodium?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to provide an easier sodium for GitHub secrets.

This project is based on `libsodium.js` ([GitHub](https://github.com/jedisct1/libsodium.js))([NPM](https://www.npmjs.com/package/libsodium)) with optimization for GitHub secrets.

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/github-sodium
```

```js
/* Either */
import { ... } from "@hugoalh/github-sodium";// Named Import
import * as githubSodium from "@hugoalh/github-sodium";// Namespace Import
import GitHubSodiumSealer from "@hugoalh/github-sodium";// Default Import (Class `GitHubSodiumSealer`)
```

### API

- ```ts
  class GitHubSodiumSealer {
    constructor(publicKey: string): GitHubSodiumSealer;
    encrypt(value: string): string;
    static seal(publicKey: string, value: string): string;
  }
  ```
- ```ts
  function seal(publicKey: string, value: string): string;
  ```

### Example

- ```js
  new GitHubSodiumSealer("base64-encoded-public-key").encrypt("plain-text-secret");
  //=> "+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0="
  ```
