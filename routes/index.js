module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.use(`/user`, require("./user.route"));
}