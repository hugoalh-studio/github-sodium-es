/*==================
[NodeJS] GitHub Sodium
	Language:
		NodeJS/10.13.0
==================*/
const sodium = require("tweetsodium");
/**
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Your organization or repository public key, which need for encrypt secret before create or update secret.
 * @param {string} value Your secret value.
 * @returns {string} A encrypted GitHub secret value.
 */
module.exports = (publicKey, value) => {
	if (typeof publicKey !== "string" || publicKey.length === 0) {
		throw new TypeError(`Argument "publicKey" must be type of string (non-nullable)! ([NodeJS] GitHub Sodium)`);
	};
	if (typeof value !== "string" || value.length === 0) {
		throw new TypeError(`Argument "value" must be type of string (non-nullable)! ([NodeJS] GitHub Sodium)`);
	};
	return Buffer.from(sodium.seal(Buffer.from(value), Buffer.from(publicKey, "base64"))).toString("base64");
};
