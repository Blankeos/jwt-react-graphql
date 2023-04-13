import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./MyContext";
import { verify } from "jsonwebtoken";
/**
 * A middleware for to check if user is authenticated
 */
export const isAuthenticated: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"]; // Bearer <token>

  if (!authorization) {
    throw new Error("no authorization header found");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error("not authenticated!");
  }

  return next();
};
