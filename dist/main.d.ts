/**
 * GitHub sodium sealer for encrypt value to GitHub secret value.
 */
export declare class GitHubSodiumSealer {
    #private;
    /**
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     */
    constructor(publicKey: string);
    /**
     * Encrypt value to GitHub secret value.
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    encrypt(value: string): string;
    /**
     * Encrypt value to GitHub secret value.
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    static seal(publicKey: string, value: string): string;
}
export default GitHubSodiumSealer;
/**
 * Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
export declare function seal(publicKey: string, value: string): string;
//# sourceMappingURL=main.d.ts.map