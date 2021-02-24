import { getRepository, Repository } from 'typeorm';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);
    return tool;
  }

  public async findByTag(tag: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne({
      where: { tag },
    });

    return tool;
  }

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create(toolData);
    await this.ormRepository.save(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }
}

export default ToolsRepository;
