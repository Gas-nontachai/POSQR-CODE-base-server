module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.use(`/category`, require("./category.route"));
}