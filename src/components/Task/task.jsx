import styles from './task.module.css';
import {BsCheckCircleFill, BsCircle, FaRegTrashAlt} from 'react-icons/all';

export function Task({id, content, onDeleteTask, onCheckTask, isCompleted}) {

  function handleDeletetask() {
    onDeleteTask(content);
  }

  function handleCheckTask() {
    onCheckTask(content)
  }

  return(
    <div className={styles.taskWrapper} >
      <button className={styles.checkBtn} onClick={handleCheckTask} >
        {isCompleted ? <BsCheckCircleFill size={22} className={styles.check} /> : <BsCircle size={22} />}
      </button>

      <p className={isCompleted ? styles.checkText : ""} >{content}</p>

      <button className={styles.trashBtn} onClick={handleDeletetask}>
        <FaRegTrashAlt size={20} />
      </button>
    </div>
  )
}