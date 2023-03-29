import styles from './header.module.css';

import rocket from '../../assets/logo.svg';


export function Header() {
  return(
    <header className={styles.header} >
      <img src={rocket} alt="Foguete azul voando" />
      <h1>to<span>do</span></h1>
    </header>
  )
}
