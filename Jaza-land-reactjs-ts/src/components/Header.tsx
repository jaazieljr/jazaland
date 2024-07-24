import styles from './Header.module.css';
import jazaLogo from '../assets/jaza-logo.svg'
export function Header() {
  return (
    <header className={styles.header}>
      <img src={jazaLogo} alt="Logotipo do Ignite" />
      
    </header>
  );
}