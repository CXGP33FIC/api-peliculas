module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === '12345') {
        next();
    } else {
        res.status(401).json({ mensaje: "API Key inválida o ausente" });
    }
};
