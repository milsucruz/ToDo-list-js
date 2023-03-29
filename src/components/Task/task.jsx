import styles from './task.module.css';
// import { CheckCircle, Circle, Trash } from 'phosphor-react';
import {BsCheckCircleFill, BsCircle, FaRegTrashAlt} from 'react-icons/all';

export function Task({id, content, onDeleteTask}) {

  function handleDeletetask() {
    alert(`Task "${content}" removida da lista!`)
    onDeleteTask(content);
  }

  const isCompleted = true;

  return(
    <div className={styles.taskWrapper} key={id} >
      <button className={styles.checkBtn} >
        {isCompleted ? <BsCheckCircleFill size={22} className={styles.check} /> : <BsCircle size={22} />}
      </button>

      <p>{content}</p>

      <button className={styles.trashBtn} onClick={handleDeletetask}>
        <FaRegTrashAlt size={20} />
      </button>
    </div>
  )
}