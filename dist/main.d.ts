/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
declare class GitHubSodiumSealer {
    #private;
    /**
     * @constructor
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     */
    constructor(publicKey: string);
    /**
     * @method encrypt
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    encrypt(value: string): string;
    /**
     * @static seal
     * @description Encrypt value to GitHub secret value.
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    static seal(publicKey: string, value: string): string;
}
/**
 * @function seal
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
declare function seal(publicKey: string, value: string): string;
export { GitHubSodiumSealer, seal };
declare const _default: {
    GitHubSodiumSealer: typeof GitHubSodiumSealer;
    seal: typeof seal;
};
export default _default;
//# sourceMappingURL=main.d.ts.map