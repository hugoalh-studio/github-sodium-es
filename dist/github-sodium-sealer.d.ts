/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
declare class GitHubSodiumSealer {
    #private;
    /**
     * @constructor
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     * @throws {TypeError} Argument `publicKey` is not a valid string.
     */
    constructor(publicKey: string);
    /**
     * @method
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     * @throws {TypeError} Argument `value` is not a valid string.
     */
    encrypt(value: string): string;
}
export default GitHubSodiumSealer;
//# sourceMappingURL=github-sodium-sealer.d.ts.map