const User = require('./User');

/**
 * An upvote response used for a server.
 * @constructor
 */
class Upvote {
	/**
	 * @param {object} upvote The raw upvote object returned from the API.
	 * @property {number} timestamp The timestamp in milliseconds at which the user upvoted.
	 * @property {User} user A User class holding information on the user who upvoted.
	 * @memberof Upvote
	 */
	constructor(upvote) {
		this.timestamp = upvote.timestamp;
		this.user = new User(upvote.user);
	}

	/**
	 * Gets the date at which the user upvoted.
	 * @returns {Date} The data at which the user upvoted.
	 * @memberof Upvote
	 */
	getTimestamp() {
		return new Date(this.timestamp);
	}

	/**
	 * Gets the User class holding information on the user who upvoted.
	 * @returns {User} A User class holding information on the user who upvoted.
	 * @memberof Upvote
	 */
	getUser() {
		return this.user;
	}
}

module.exports = Upvote;