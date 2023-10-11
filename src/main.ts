import libsodium from "libsodium-wrappers";
await libsodium.ready;
/**
 * GitHub sodium sealer for encrypt value to GitHub secret value.
 */
export class GitHubSodiumSealer {
	#publicKeyBuffer: Buffer;
	/**
	 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
	 */
	constructor(publicKey: string) {
		if (!(publicKey.length > 0)) {
			throw new SyntaxError(`Argument \`publicKey\` is not a string which is non-empty!`);
		}
		this.#publicKeyBuffer = Buffer.from(publicKey, "base64");
	}
	/**
	 * Encrypt value to GitHub secret value.
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	encrypt(value: string): string {
		if (!(value.length > 0)) {
			throw new SyntaxError(`Argument \`value\` is not a string which is non-empty!`);
		}
		return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), this.#publicKeyBuffer)).toString("base64");
	}
	/**
	 * Encrypt value to GitHub secret value.
	 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
	 * @param {string} value Value that need to encrypt as secret value.
	 * @returns {string} An encrypted GitHub secret value.
	 */
	static seal(publicKey: string, value: string): string {
		return new this(publicKey).encrypt(value);
	}
}
export default GitHubSodiumSealer;
/**
 * Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
export function seal(publicKey: string, value: string): string {
	return new GitHubSodiumSealer(publicKey).encrypt(value);
}
