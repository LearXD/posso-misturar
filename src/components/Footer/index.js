import { useRef } from 'react';
import './style.css';

function Footer() {

  const date = useRef(new Date()).current;

  return (
    <footer>
      <p>IFMG - ITABIRITO</p>
      <p>{date.getFullYear()}</p>
    </footer>
  )
}

export default Footer;