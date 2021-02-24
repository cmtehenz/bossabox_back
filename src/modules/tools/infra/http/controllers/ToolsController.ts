import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '@modules/tools/services/CreateToolService';

export default class ToolsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { title, link, description } = req.body;

    const createTool = container.resolve(CreateToolService);

    const tool = await createTool.execute({
      title,
      link,
      description,
    });

    return res.json(classToClass(tool));
  }
}
