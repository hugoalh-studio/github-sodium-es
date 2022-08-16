export default GitHubSodiumSealer;
/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
declare class GitHubSodiumSealer {
    /**
     * @constructor
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     */
    constructor(publicKey: string);
    /**
     * @method
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    encrypt(value: string): string;
    #private;
}
//# sourceMappingURL=github-sodium-sealer.d.mts.map