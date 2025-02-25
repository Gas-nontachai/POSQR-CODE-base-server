const filterEmthyKey = (data, excludeKeys = []) => {
    const filteredData = {};

    Object.keys(data).forEach((key) => {
        if (!excludeKeys.includes(key) && (data[key] !== "" && data[key] !== undefined && data[key] !== null)) {
            filteredData[key] = data[key];
        }
    });

    return filteredData;
};

module.exports = filterEmthyKey;