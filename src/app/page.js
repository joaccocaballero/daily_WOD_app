'use client'
import { wod } from "../../data/data"; 
import styles from "../../sass/home.module.scss";

export default function Home() {
  const wodContent = wod[0]
  return (
  <main className={styles.mainContainer}>
    <>
      <h1 className='text-white font-teko'>Daily WOD App</h1>
    </>
  </main>
  );
}
