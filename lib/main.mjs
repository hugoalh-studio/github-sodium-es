import { isString as adIsString } from "@hugoalh/advanced-determine";
import libsodium from "libsodium-wrappers";
await libsodium.ready;
/**
 * @class GitHubSodium
 * @description Encrypt value to GitHub secret value.
 */
class GitHubSodium {
	#publicKey;
	/**
	 * @constructor
	 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
	 */
	constructor(publicKey) {
		if (!adIsString(publicKey, { empty: false })) {
			throw new TypeError(`Argument \`publicKey\` must be type of string (non-empty)!`);
		};
		this.#publicKey = publicKey;
	};
	/**
	 * @method
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	encrypt(value) {
		if (!adIsString(value, { empty: false })) {
			throw new TypeError(`Argument \`value\` must be type of string (non-empty)!`);
		};
		return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), Buffer.from(this.#publicKey, "base64"))).toString("base64");
	};
};
export default GitHubSodium;
