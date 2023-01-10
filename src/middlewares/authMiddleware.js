export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization

    if (token !== 'PivvitChallenge') {
        return res.status(401).json({
            status: false,
            message: 'Unauthorized',
        })
    }

    next()
};
