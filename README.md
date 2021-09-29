# GitHub Sodium (NodeJS Edition)

[`GitHubSodium.NodeJS`](https://github.com/hugoalh-studio/github-sodium-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/github-sodium-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/github-sodium-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/github-sodium-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/github-sodium-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/github-sodium-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/github-sodium-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/github-sodium-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/github-sodium-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/github-sodium-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/github-sodium-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/github-sodium-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/github-sodium-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/github-sodium-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/github-sodium-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/github-sodium-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/github-sodium) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/github-sodium?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to provide an easier sodium for GitHub secret.

This project is based on "tweetsodium" ([GitHub](https://github.com/github/tweetsodium))([NPM](https://www.npmjs.com/package/tweetsodium)) with optimization for GitHub secret.

## 📚 Documentation

### Getting Started (Excerpt)

#### Install

NodeJS (>= v14.15.0) + NPM (>= v6.14.8):

```sh
npm install @hugoalh/github-sodium
```

#### Use In CommonJS

```js
const githubSodium = require("@hugoalh/github-sodium");
```

#### Use In ModuleJS

```js
import githubSodium from "@hugoalh/github-sodium";
```

### API

```ts
githubSodium(// Encrypt value to GitHub secret value.
  publicKey: string,// Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
  value: string// Value that need to encrypt as secret value.
): string// A encrypted GitHub secret value.
```

### Example

```js
githubSodium("awpojpwojqmrmklmklmkljicvjifjogjotrj", "my-secret");
//=> "spjerpawakmsfnklasklfnkljljkasjkdlazsdjfljslejifklejrlkmslkfmklpmqhnoubdpsdofipskpdokfepkasdpoaiwopejkqmatyn"
```
