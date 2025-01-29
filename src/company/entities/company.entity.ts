import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('companies')

export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    responsible_person: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    mobile_no: string;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    group_id: number | null;

    @Column({ default: false })
    status: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
