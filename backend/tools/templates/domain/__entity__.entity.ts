import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class __entity__(pascalCase) {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
}