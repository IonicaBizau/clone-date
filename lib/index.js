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
    // prevent error message in case of an invalid entry
    try {
        date.getTime();
    } catch (error) {
        date = new Date(date);
    }
    var c = new Date();
    c.setTime(date.getTime());
    return c;
};
