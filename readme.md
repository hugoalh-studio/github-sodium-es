# GitHub Sodium (NodeJS Edition)

<details>
  <summary><a href="https://github.com/hugoalh-studio/github-sodium-nodejs"><code>GitHubSodium.NodeJS</code></a></summary>
  <img align="center" alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Top Langauge" src="https://img.shields.io/github/languages/top/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Watcher" src="https://img.shields.io/github/watchers/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Star" src="https://img.shields.io/github/stars/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Fork" src="https://img.shields.io/github/forks/hugoalh-studio/github-sodium-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
</details>

A module for NodeJS to provide an easier sodium for GitHub secret.

<table>
  <tr>
    <td><a href="./license.md"><b>License</b></a></td>
    <td>MIT</td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/github-sodium-nodejs/releases"><b>Release (GitHub)</b></a> <img align="center" src="https://img.shields.io/github/downloads/hugoalh-studio/github-sodium-nodejs/total?label=%20&style=flat-square" /></td>
    <td>
      <b>Latest:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" />)<br />
      <b>Pre:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date-pre/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" />)
    </td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/@hugoalh/github-sodium"><b>Release (NPM)</b></a> <img align="center" src="https://img.shields.io/npm/dt/@hugoalh/github-sodium?label=%20&style=flat-square" /></td>
    <td>
      <b>Latest:</b> <img align="center" src="https://img.shields.io/npm/v/@hugoalh/github-sodium/latest?label=%20&style=flat-square" /><br />
      <b>Pre:</b> <img align="center" src="https://img.shields.io/npm/v/@hugoalh/github-sodium/pre?label=%20&style=flat-square" />
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/github-sodium-nodejs/graphs/contributors"><b>Contributor</b></a> <img align="center" src="https://img.shields.io/github/contributors/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" /></td>
    <td><ul>
        <li><a href="https://github.com/hugoalh-studio">hugoalh Studio</a></li>
        <li><a href="https://github.com/hugoalh">hugoalh</a></li>
    </ul></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/github-sodium-nodejs/issues?q=is%3Aissue"><b>Issue</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-raw/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-closed-raw/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh-studio/github-sodium-nodejs/pulls?q=is%3Apr"><b>Pull Request</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-pr-raw/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/github-sodium-nodejs?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><b>Code Quality</b></td>
    <td>
      <a href="https://www.codefactor.io/repository/github/hugoalh-studio/github-sodium-nodejs"><img align="center" alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/hugoalh-studio/github-sodium-nodejs?logo=codefactor&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh-studio/github-sodium-nodejs/alerts"><img align="center" alt="LGTM Alert" src="https://img.shields.io/lgtm/alerts/g/hugoalh-studio/github-sodium-nodejs?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh-studio/github-sodium-nodejs/context:javascript"><img align="center" alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/github-sodium-nodejs?logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
    </td>
  </tr>
</table>

## 📜 Description

GitHub Sodium is based on "tweetsodium" ([GitHub](https://github.com/github/tweetsodium))([NPM](https://www.npmjs.com/package/tweetsodium)), but this module is optimized for GitHub secret.

## 📄 Documentation

### Getting Started

NodeJS (>= v14.15.0) & NPM (>= v6.14.8):

```sh
> npm install @hugoalh/github-sodium
```

### API

#### `(publicKey, value)`

##### Description

Encrypt value to GitHub secret value.

##### Argument

###### `publicKey`

`<string>` Your organization or repository public key, which need for encrypt secret before create or update secret.

###### `value`

`<string>` Your secret value.

##### Return

`<string>` A encrypted GitHub secret value.

### Example

```javascript
const githubSodium = require("@hugoalh/github-sodium");

console.log(githubSodium("awpojpwojqmrmklmklmkljicvjifjogjotrj", "my-secret"));// spjerpawakmsfnklasklfnkljljkasjkdlazsdjfljslejifklejrlkmslkfmklpmqhnoubdpsdofipskpdokfepkasdpoaiwopejkqmatyn
```
