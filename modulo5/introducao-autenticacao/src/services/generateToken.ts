import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export type payload = {
    id: string;
};

  const generateToken = (data: payload) => {
      console.log(process.env.JWT_KEY);
    const token = jwt.sign(
        {
            id: data.id,

        },
        process.env.JWT_KEY as string,
        { expiresIn: "10m" }
    );
    return token;
    };

    export { generateToken };
