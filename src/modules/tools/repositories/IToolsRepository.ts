import ICreateToolDTO from '../dtos/ICreateToolDTO';
import Tool from '../infra/typeorm/entities/Tool';

export default interface IToolsRepository {
  findById(id: string): Promise<Tool | undefined>;
  findByTag(tag: string): Promise<Tool | undefined>;
  create(data: ICreateToolDTO): Promise<Tool>;
  save(tool: Tool): Promise<Tool>;
}
