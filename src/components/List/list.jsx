import styles from './list.module.css';
import { PlusCircle } from 'phosphor-react';

import {v4 as uuidv4} from 'uuid'

import clipboard from '../../assets/clipboard.svg';

const tasks = [
  {
    id: uuidv4(),
    content: "Aloo",
    isCompleted: false
  }
]

export function List() {
  
  return(
    <div className={styles.wrapper} >
      <div className={styles.inputArea}>
        <form className={styles.inputForm} >
          <textarea placeholder='Adicione uma nova tarefa'/>

          <button type='submit' >
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </div>
      
        <div className={styles.header}>

          <div className={styles.infos} >
            <p>Tarefas criadas</p>
            <span>2</span>
          </div>

          <div className={styles.infos}>
            <p>Concluídas </p>
            <span>1 de 2</span>
          </div>

        </div>

        <div className={styles.emptyList} >
          <img src={clipboard} alt="Prancheta" />
          <p>
            Você ainda não tem tarefas cadastradas<br/>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>

    </div>
  )
} 