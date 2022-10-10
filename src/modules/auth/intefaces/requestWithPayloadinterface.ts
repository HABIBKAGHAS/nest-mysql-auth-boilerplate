import { Request } from "express";
import { JwtPayload } from "./token-payload.interface";

interface RequestWithPayload extends Request {
  user: JwtPayload;
}

export default RequestWithPayload;
