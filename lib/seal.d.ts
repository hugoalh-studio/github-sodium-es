export = seal;
/**
 * @function seal
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
declare function seal(publicKey: string, value: string): string;
//# sourceMappingURL=seal.d.ts.map