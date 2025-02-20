module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.use(`/category`, require("./category.route"));
    app.use(`/menu`, require("./menu.route"));
    app.use(`/order`, require("./order.route"));
    app.use(`/order-detail`, require("./order-detail.route"));
    app.use(`/payment`, require("./payment.route"));
    app.use(`/qrcode`, require("./qrcode.route"));
    app.use(`/table`, require("./table.route"));
    app.use(`/table-status`, require("./table-status.route"));
    app.use(`/user`, require("./user.route"));
    app.use(`/user-role`, require("./user-role.route"));
}