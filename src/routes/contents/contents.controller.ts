import { IContent } from "../../interfaces/IContents";
import { contents } from "../../models/contents.model";
import { Request } from "express";

const contentsController = {
  // Fix that [any]
  getAllContents(req: Request, res: any): Promise<IContent> {
    return res.status(200).json(contents);
  },
};
export { contentsController };
