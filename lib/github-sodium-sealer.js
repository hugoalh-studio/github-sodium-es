const advancedDetermine = require("@hugoalh/advanced-determine");
const tweetsodium = require("tweetsodium");
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
		if (!advancedDetermine.isString(publicKey, { empty: false })) {
			throw new TypeError(`Argument \`publicKey\` must be type of string (non-empty)!`);
		};
		this.#publicKeyStorage = Buffer.from(publicKey, "base64");
	};
	/**
	 * @method
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	encrypt(value) {
		if (!advancedDetermine.isString(value, { empty: false })) {
			throw new TypeError(`Argument \`value\` must be type of string (non-empty)!`);
		};
		return Buffer.from(tweetsodium.seal(Buffer.from(value), this.#publicKeyStorage)).toString("base64");
	};
};
module.exports = GitHubSodiumSealer;
