import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { Leave } from './entities/leave.entity';
import { formatResponse } from '../utils/response.util';

@Injectable()
export class LeaveService {
  constructor(
    @InjectRepository(Leave)
    private readonly leaveRepository: Repository<Leave>,
  ) {}

  async create(createLeaveDto: CreateLeaveDto) {
    try {
      const leave = this.leaveRepository.create({
        ...createLeaveDto,
        created_at: new Date(),
        updated_at: new Date(),
      });
      const savedLeave = await this.leaveRepository.save(leave);
      return formatResponse(true, 'Leave created successfully.', savedLeave);
    } catch (error) {
      return formatResponse(false, 'Failed to create leave.', null, error);
    }
  }

  async findAll() {
    try {
      const leaves = await this.leaveRepository.find();
      return formatResponse(true, 'Leaves retrieved successfully.', leaves);
    } catch (error) {
      return formatResponse(false, 'Failed to retrieve leaves.', null, error);
    }
  }

  async findOne(id: number) {
    try {
      const leave = await this.leaveRepository.findOne({ where: { id } });
      if (!leave) {
        return formatResponse(false, `Leave not found.`);
      }
      return formatResponse(true, `Leave retrieved successfully.`, leave);
    } catch (error) {
      return formatResponse(false, `Failed to retrieve leave.`, null, error);
    }
  }

  async update(id: number, updateLeaveDto: UpdateLeaveDto) {
    try {
      const leave = await this.leaveRepository.findOne({ where: { id } });
      if (!leave) {
        return formatResponse(false, `Leave not found.`);
      }
      const updatedLeave = await this.leaveRepository.save({
        ...leave,
        ...updateLeaveDto,
        updated_at: new Date(),
      });
      return formatResponse(true, `Leave updated successfully.`, updatedLeave);
    } catch (error) {
      return formatResponse(false, `Failed to update leave.`, null, error);
    }
  }

  async remove(id: number) {
    try {
      const leave = await this.leaveRepository.findOne({ where: { id } });
      if (!leave) {
        return formatResponse(false, `Leave not found.`);
      }
      await this.leaveRepository.delete(id);
      return formatResponse(true, `Leave removed successfully.`);
    } catch (error) {
      return formatResponse(false, `Failed to remove leave.`, null, error);
    }
  }
}
