import React, { useState, FormEvent, useEffect } from 'react';
import { format as currency } from 'currency-formatter';

import PageHeader from '../../components/PageHeader';
import Input  from '../../components/Input';

import './styles.css';
import { api } from '../../services/api';
import { format } from 'date-fns';

interface ITicket {
    nome: string;
    valor_original: number;
    regra: string;
    dias_atraso: number;
    valor_corrigido: number;
    data_pagamento: Date;
    data_vencimento: Date;
    created_at: Date;
    updated_at: Date;
}

const Inicio: React.FC = () => {
  const [lista, setLista] = useState<ITicket[]>([]); 
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startDate2, setStartDate2] = useState('');

  useEffect(() => {
    async function load(): Promise<void> {
      const response = await api.get('/tickets');    
      setLista(response.data);
    }
    load();
  }, []);

  async function handleSubmit(e:FormEvent) {
    e.preventDefault();
    console.log(nome, valor, startDate2, startDate,)
    if ( nome != '' &&  valor!= '' && startDate2!= '' &&  startDate != '') {
      const response = await api.post('tickets', {
          nome,
          valor_original: valor,
          data_pagamento: startDate2,
          data_vencimento: startDate,
      });    
      let list: ITicket[] = [...lista, response.data];
      setLista(list); 
      alert('cadastrado com sucesso');
    } else {
      alert('Preencha os campos para adicionar');
    }   
  }


  return (
    <div id="page-list"  className="container">
      <PageHeader title="teste"> 
        
      </PageHeader>
      <form id="add" onSubmit={handleSubmit}>
            <Input  
                name="nome" 
                label="Nome" 
                type="text"
                value={nome}
                onChange={(e: any) => setNome(e.target.value)}
            />
            <Input  
                name="data_pagamento" 
                label="Data Pagamento" 
                type="date"
                value={startDate2}
                onChange={(e: any) => setStartDate2(e.target.value)}
            />
            <Input  
                name="data_vencimento" 
                label="Data Vencimento" 
                type="date"
                value={startDate}
                onChange={(e: any) => setStartDate(e.target.value)}
            />
            <Input  
                name="valor_original" 
                label="Valor" 
                type="number"
                value={valor}
                onChange={(e: any) => setValor(e.target.value)}
            />
          

            <button type="submit" className="btn">
                Adicionar
            </button>

        </form>
        <main>
        <ul className="listaconta">
         {lista ? <>
            {lista.map(item => (
               <> 
                    <li>
                        <h3>{`conta: ${item.nome}`}</h3>
                        <p>{`data vencimento: ${format(new Date(item.data_vencimento), 'dd/MM/yyyy')}`}</p>
                        <p>{`data pagamento: ${format(new Date(item.data_pagamento), 'dd/MM/yyyy')}`}</p>
                        <p>{`valor: ${currency(item.valor_original, {locale: 'pt-BR'})}`}</p>
                        {item.dias_atraso > 0 ? <>
                          <p>{`${item.dias_atraso} dias de atraso`}</p>
                          <p>{`valor corrigido: ${currency(item.valor_corrigido, {locale: 'pt-BR'})}`}</p>
                          <p>{`regra: ${item.regra}`}</p>                        
                          </> : <>
                          <p>{`regra: ${item.regra}`}</p>    
                          </>
                        }
                        
                    </li>   
                    <br />            
                </>
            ))}
         
         </> : <></>}
     </ul>
        </main>
    
    </div>
  );
}

export default Inicio;