import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class Card extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column({ nullable: false })
    temperature: number;

    @ApiProperty()
    @Column({ nullable: false })
    windSpeed: number

    @ApiProperty()
    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
}