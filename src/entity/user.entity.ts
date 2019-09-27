import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryColumn({ length: 32 })
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 32 })
    password: string;

    @Column({ default: false })
    is_deleted: boolean;

    @Column({ default: 0, type: 'int' })
    status: number;
}