import libsodium from "libsodium-wrappers";
await libsodium.ready;
/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
class GitHubSodiumSealer {
	#publicKeyBuffer: Buffer;
	/**
	 * @constructor
	 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
	 */
	constructor(publicKey: string) {
		if (typeof publicKey !== "string") {
			throw new TypeError(`Argument \`publicKey\` must be type of string!`);
		}
		if (!(publicKey.length > 0)) {
			throw new Error(`Argument \`publicKey\` must be a string which is non-empty!`);
		}
		this.#publicKeyBuffer = Buffer.from(publicKey, "base64");
	}
	/**
	 * @method encrypt
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	encrypt(value: string): string {
		if (typeof value !== "string") {
			throw new TypeError(`Argument \`value\` must be type of string!`);
		}
		if (!(value.length > 0)) {
			throw new Error(`Argument \`value\` must be a string which is non-empty!`);
		}
		return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), this.#publicKeyBuffer)).toString("base64");
	}
	/**
	 * @static seal
	 * @description Encrypt value to GitHub secret value.
	 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	static seal(publicKey: string, value: string): string {
		return new this(publicKey).encrypt(value);
	}
}
/**
 * @function seal
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
function seal(publicKey: string, value: string): string {
	return new GitHubSodiumSealer(publicKey).encrypt(value);
}
export {
	GitHubSodiumSealer,
	seal
};
export default {
	GitHubSodiumSealer,
	seal
};
