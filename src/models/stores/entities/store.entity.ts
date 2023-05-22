import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  // @ManyToOne(() => User, { nullable: true })
  // owner: User;

  // @OneToMany(() => Product, (product) => product.store)
  // products: Product[];
}
