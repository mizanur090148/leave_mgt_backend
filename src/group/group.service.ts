import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    // Create a new Group entity using object spreading
    const group = this.groupRepository.create({
      ...createGroupDto, // Spread all properties from the DTO
      created_at: new Date(), // Add any additional properties required by the entity
      updated_at: new Date(),
    });

    // Save the entity to the database
    return await this.groupRepository.save(group);
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  // update(id: number, updateGroupDto: UpdateGroupDto) {
  //   return `This action updates a #${id} group`;
  // }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
