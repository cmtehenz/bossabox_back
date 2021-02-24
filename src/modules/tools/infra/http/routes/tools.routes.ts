import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ensureAuth from '@shared/infra/http/middlewares/ensureAuth';

import ToolsController from '@modules/tools/infra/http/controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  toolsController.create,
  ensureAuth,
);

export default toolsRouter;
