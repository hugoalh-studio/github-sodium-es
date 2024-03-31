# GitHub Sodium (JavaScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/github-sodium-js](https://img.shields.io/badge/hugoalh--studio/github--sodium--js-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/github-sodium-js")](https://github.com/hugoalh-studio/github-sodium-js)
[![NPM: @hugoalh/github-sodium](https://img.shields.io/badge/@hugoalh/github--sodium-CB3837?logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/github-sodium")](https://www.npmjs.com/package/@hugoalh/github-sodium)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-js?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/github-sodium-js?color=2187C0&label=&style=flat "Latest Release Date"))

A JavaScript module to provide an easier sodium for GitHub secrets.

This project is based on [libsodium.js](https://github.com/jedisct1/libsodium.js) with optimization for GitHub secrets.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via Installation

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via console/shell/terminal:
    - Via NPM
      ```sh
      npm install @hugoalh/github-sodium[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm add @hugoalh/github-sodium[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn add @hugoalh/github-sodium[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.js`):
    ```js
    import ... from "@hugoalh/github-sodium";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.

### Via NPM Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script (`<ScriptName>.js`):
    ```js
    import ... from "npm:@hugoalh/github-sodium[@<Tag>]";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.

## 🧩 API

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

## ✍️ Example

- ```js
  new GitHubSodiumSealer("base64-encoded-public-key").encrypt("plain-text-secret");
  //=> "+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0="
  ```
