const listaDeLogs = [];

export default (req, res, next) => {
    const { method, url } = req;

    const logLabel = `[${method.toUpperCase()} ${url}]`;
    listaDeLogs.push(logLabel);

    return next();
};