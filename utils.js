const flip = function (msg, callback) {
    let raw = String(msg);
    let final = '';
    for (let i = raw.length; i > -1; i--) {
        final += raw[i];
    }
    callback(final);
}

module.exports = {flip};
