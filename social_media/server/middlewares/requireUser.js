const jwt = require('jsonwebtoken');
const { error } = require('../utils/responseWrapper');


module.exports = async (req, res, next) => {
    if (
        !req.headers ||
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer")
    ) {
        // return res.status(401).send();
        return res.send(error(401, "'Authorization headers is required'"))
    }

    const accessToken = req.headers.authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_PRIVATE_KEY
        )

        req._id = decoded._id;

        next();
    } catch (error) {
        console.log(error);
        // return res.status(401).send('Invalid access key');
        return res.send(error(401, "Invalid accesss key"));
    }
    next();
}