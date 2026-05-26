/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @param {number} id
 * @returns {Promise<User>}
 */
function getUser(id) {
    return fetch(`/api/users/${id}`).then(r => r.json());
}