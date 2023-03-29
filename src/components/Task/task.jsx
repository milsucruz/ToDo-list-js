import styles from './task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

export function Task({id, content}) {

  function handleDeletetask() {
    alert(`Task "${content}" removida da lista!`)
    // onDeleteTask(id);
  }

  return(
    <div className={styles.taskWrapper} key={id} >
      <button className={styles.checkBtn} >
        <Circle size={24} />
      </button>

      <p>{content}</p>

      <button className={styles.trashBtn} onClick={handleDeletetask}>
        <Trash size={20} />
      </button>
    </div>
  )
}