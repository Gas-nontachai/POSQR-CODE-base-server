
const handleDbQuery = (queryFn) => {
    return new Promise((resolve, reject) => {
        queryFn((err, res) => {
            if (err) return reject(new Error(err.message));
            resolve(res);
        });
    });
};

module.exports = handleDbQuery;
