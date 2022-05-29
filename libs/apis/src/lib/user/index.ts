/**
 * Get Channel
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * GET /channels/{channel.id}
 */

/**
 * Modify Channel
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * PATCH /channels/{channel.id}
 */

/**
 * Delete/Close Channel
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * DELETE/channels/{channel.id}
 */

/**
 * Get Channel Messages
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * GET/channels/{channel.id}/messages
 */

/**
 * Get Channel Message
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * GET/channels/{channel.id}/messages/{message.id}
 */

/**
 * Create Message
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * @POST /channels/{channel.id}/messages
 */

/**
 * Create Reaction
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * PUT/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me
 */

/**
 * Delete Own Reaction
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * DELETE/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me
 */

/**
 * Delete User Reaction
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * DELETE/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}
 */

/**
 * Get Reactions
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * GET/channels/{channel.id}/messages/{message.id}/reactions/{emoji}
 */

/**
 * Get Channel Invites
 * @param {string} channelId
 * @returns {Promise<AxiosResponse<any>>}
 * GET/channels/{channel.id}/invites
 */
