import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Card {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    temperature: number;

    @Column({ nullable: false })
    windSpeed: number

    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
}