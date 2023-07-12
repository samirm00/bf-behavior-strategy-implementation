import { findActiveUsers } from './find-active-users.js';

/**
 * Returns an array of all active user names.
 *
 * @param {object[]} users - An array of user objects.
 * @returns {string[]} An array of user names.
 */
export const listActiveUsers = (users) => {
    const activeUsers = findActiveUsers(users);
    return activeUsers.map((user) => user.userName);
};
