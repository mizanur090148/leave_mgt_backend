import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('leaves')

export class Leave {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    status: boolean;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    created_by: number | null;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    updated_by: number | null;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    deleted_by: number | null;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}

