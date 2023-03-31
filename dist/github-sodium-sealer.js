import { StringItemFilter } from "@hugoalh/advanced-determine";
import libsodium from "libsodium-wrappers";
await libsodium.ready;
const stringFilter = new StringItemFilter();
/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
class GitHubSodiumSealer {
    #publicKeyStorage;
    /**
     * @constructor
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     */
    constructor(publicKey) {
        if (!stringFilter.test(publicKey)) {
            throw new TypeError(`Argument \`publicKey\` must be type of string (non-empty)!`);
        }
        this.#publicKeyStorage = Buffer.from(publicKey, "base64");
    }
    /**
     * @method encrypt
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    encrypt(value) {
        if (!stringFilter.test(value)) {
            throw new TypeError(`Argument \`value\` must be type of string (non-empty)!`);
        }
        return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), this.#publicKeyStorage)).toString("base64");
    }
    /**
     * @static seal
     * @description Encrypt value to GitHub secret value.
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    static seal(publicKey, value) {
        return new this(publicKey).encrypt(value);
    }
}
export { GitHubSodiumSealer };
