module.exports.makeMessageJson = (message, data, error) => {
    return {
        message: message,
        data: data,
        error: error
    }
}