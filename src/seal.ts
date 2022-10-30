import GitHubSodiumSealer from "./github-sodium-sealer.js";
/**
 * @function seal
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
function seal(publicKey: string, value: string): string {
	return new GitHubSodiumSealer(publicKey).encrypt(value);
}
export default seal;
