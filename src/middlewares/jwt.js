import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization");
    
        if (!token)
          return res
            .status(401)
            .json({ stautsCode: 401, message: "Unauthorized" });
    
        if (token.startsWith("Bearer "))
          token = token.slice(7, token.length).trimLeft();
    
        const payload = jwt.decode(token);

        req.user = payload;
        next();
      } catch (err) {
        res.status(401).json({ stautsCode: 401, message: err.message });
      }
    
}