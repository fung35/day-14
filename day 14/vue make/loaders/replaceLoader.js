module.exports = function (source) {
    return source.replace('world',this.query.name);
}