import styles from './list.module.css';
import { useState } from 'react';

import { Task } from '../Task/task';

import {v4 as uuidv4} from 'uuid'
import {AiOutlinePlusCircle} from 'react-icons/ai'

import clipboard from '../../assets/clipboard.svg';

export function List() {
  const [tasks, setTasks] = useState(
    [
      {
        id: uuidv4(),
        content: "Fica aí",
        isCompleted: false
      },
    ]
  )

  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTask() {
    event.preventDefault()
    setTasks([
      ...tasks, 
      {
        id: uuidv4(),
        content: newTaskText,
        isCompleted: false
      }
    ]);
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.content != taskToDelete;
    })

    setTasks(tasksWithoutDeleteOne)
  }

  function checkTask() {

  }

  let taskCounter = tasks.length;
  let taskIsCompletedCounter = tasks.filter(task => task.isCompleted).length
  
  return(
    <div className={styles.wrapper} >
      <div className={styles.inputArea}>
        <form className={styles.inputForm} onSubmit={handleNewTask}>
          <textarea 
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskChange}
          />

          <button type='submit' >
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </div>
      
        <div className={styles.header}>

          <div className={styles.infos} >
            <p>Tarefas criadas</p>
            <span>{taskCounter}</span>
          </div>

          <div className={styles.infos}>
            <p>Concluídas </p>
            <span>{taskIsCompletedCounter} de {taskCounter}</span>
          </div>

        </div>

        {tasks.length == 0 
          ? (
              <div className={styles.emptyList} >
                <img src={clipboard} alt="Prancheta" />
                <p>
                  Você ainda não tem tarefas cadastradas<br/>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </p>
              </div>
            ) 
          : (
              <div className={styles.taskList}>
                {tasks.map(task => {
                  return(
                    <Task
                      key={task.id}
                      content={task.content}
                      onDeleteTask={deleteTask}
                      isCompleted
                    />
                  )
                })}
              </div>
            )}
    </div>
  )
} 