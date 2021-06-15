const sodium = require("tweetsodium");
/**
 * @function githubSodium
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Your organization or repository public key, which need for encrypt secret before create or update secret.
 * @param {string} value Your secret value.
 * @returns {string} A encrypted GitHub secret value.
 */
function githubSodium(publicKey, value) {
	if (typeof publicKey !== "string" || publicKey.length === 0) {
		throw new TypeError(`Argument "publicKey" must be type of string (non-nullable)!`);
	};
	if (typeof value !== "string" || value.length === 0) {
		throw new TypeError(`Argument "value" must be type of string (non-nullable)!`);
	};
	return Buffer.from(sodium.seal(Buffer.from(value), Buffer.from(publicKey, "base64"))).toString("base64");
};
module.exports = githubSodium;
