import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class News {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
}