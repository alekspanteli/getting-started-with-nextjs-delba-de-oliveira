import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ title }) {
    return (
      <>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/schedule">Schedule</Link></li>
      </ul>
      <h1 class={styles.h1}>{title ? title : "Default title"}</h1>
      </>
    )
  }
  