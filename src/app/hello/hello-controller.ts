import { Request, Response } from "express";

export class HelloController {
    public index(req: Request, res: Response) {
        res.json({
            message: "Hello boi"
        });
    }
}