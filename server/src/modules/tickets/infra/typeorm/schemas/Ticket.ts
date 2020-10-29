import {
  Entity,
  Column,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('tickets')
class Ticket {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  nome: string;

  @Column()
  regra: string;

  @Column()
  valor_original: number;

  @Column()
  valor_corrigido: number;

  @Column()
  dias_atraso: number;

  @Column()
  data_pagamento: Date;

  @Column()
  data_vencimento: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ticket;
