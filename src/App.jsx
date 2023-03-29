import styles  from './App.module.css';

import { Header } from './components/Header/header';
import { List } from './components/List/list';

import './global.css';

function App() {
  
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <List/>
      </div>
    </div>
  )
}

export default App