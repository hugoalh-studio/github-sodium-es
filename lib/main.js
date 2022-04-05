const advancedDetermine = require("@hugoalh/advanced-determine");
const libsodium = require("libsodium-wrappers");
/**
 * @function githubSodium
 * @async
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
async function githubSodium(publicKey, value) {
	if (!advancedDetermine.isString(publicKey, { empty: false })) {
		throw new TypeError(`Argument \`publicKey\` must be type of string (non-empty)!`);
	};
	if (!advancedDetermine.isString(value, { empty: false })) {
		throw new TypeError(`Argument \`value\` must be type of string (non-empty)!`);
	};
	await libsodium.ready;
	return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), Buffer.from(publicKey, "base64"))).toString("base64");
};
module.exports = githubSodium;
