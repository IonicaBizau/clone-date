/**
 * cloneDate
 * Clones a date object.
 *
 * @name cloneDate
 * @function
 * @param {Date} date The date object to clone.
 * @return {Date} The cloned date object.
 */
module.exports = function cloneDate(date) {
    var c = new Date();
    c.setTime(date.getTime());
    return c;
};
