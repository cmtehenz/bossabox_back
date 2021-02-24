import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UsersTokenRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUsersTokenRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokenRepository>(
  'UserTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);
