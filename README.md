# GitHub Sodium (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/github-sodium-es](https://img.shields.io/github/v/release/hugoalh-studio/github-sodium-es?label=hugoalh-studio/github-sodium-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/github-sodium-es")](https://github.com/hugoalh-studio/github-sodium-es)
[![JSR: @hugoalh/github-sodium](https://img.shields.io/jsr/v/@hugoalh/github-sodium?label=JSR%20@hugoalh/github-sodium&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/github-sodium")](https://jsr.io/@hugoalh/github-sodium)
[![NPM: @hugoalh/github-sodium](https://img.shields.io/npm/v/@hugoalh/github-sodium?label=@hugoalh/github-sodium&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/github-sodium")](https://www.npmjs.com/package/@hugoalh/github-sodium)

An ES (JavaScript & TypeScript) module to provide an easier sodium for GitHub secrets.

This project is based on "[libsodium.js](https://github.com/jedisct1/libsodium.js)" with optimization for GitHub secrets.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 (For JSR Only)
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/github-sodium[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/github-sodium[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/github-sodium[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/github-sodium[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/github-sodium";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/github-sodium[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/github-sodium[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/github-sodium[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/github-sodium[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/github-sodium";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/github-sodium[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/github-sodium-es/${Tag}/mod.ts";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

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

- ```ts
  new GitHubSodiumSealer("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234").encrypt("plain-text-secret");
  ```
