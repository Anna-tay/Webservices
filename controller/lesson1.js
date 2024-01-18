const lukeroute = (req, res) => {
    res.send("Luke Taylor");
};

const annaroute = (req, res) => {
    res.send("Anna Taylor");
};

module.exports = {
   lukeroute,
    annaroute,
}