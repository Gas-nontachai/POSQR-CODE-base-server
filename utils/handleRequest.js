const handleRequest = (handler) => {
    return async (req, res) => {
        try {
            const result = await handler(req);
            res.status(200).json(result);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
            console.log("(Error : ", error.status ? error.status : 500, ") : ", error.message);
        }
    };
};

module.exports = handleRequest;
