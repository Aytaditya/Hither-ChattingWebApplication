import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            throw new Error("JWT secret key not defined.");
        }

        const token = jwt.sign({ userId }, JWT_SECRET, {
            expiresIn: '15d'
        });

        // Set the token as a cookie in the HTTP response
        res.cookie('jwt', token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production', // Set secure to true in production
        });

        console.log("Token generated and cookie set.");

        console.log(res.cookie);

        return token;
    } catch (error) {
        console.error("Error generating token and setting cookie:", error);
        return null;
    }
};

export default generateTokenAndSetCookie;
