'use client'
import { wod } from "../../../data/data"; 
import styles from "../../../sass/home.module.scss";

export default function Board() {
  const wodContent = wod[0]
  return (
  <main className={styles.mainContainer}>
      <div className={styles.verticalTextContainer}>
        <div className={styles.verticalText} data-text={wodContent.className}>{wodContent.className}</div>
      </div>
      <div className={styles.containerFlexCenter}>
        <div className={styles.exercisesContainer}>
              {
                wodContent.exercises.map((item)=>{
                  return(
                    <div className={styles.blockContainer} key={wodContent.exercises.indexOf(item)}  >
                        <div className={styles.blockTitleWrapperContainer}>
                          <div className={styles.blockTitleWrapper}>
                          <h1 className={''}>{item.title.toUpperCase()}</h1>
                          </div>
                        </div>
                        <div className={styles.blockDescription}>
                          <h2 className={''}>{item.subtitle}</h2>
                          <pre className={''}>{item.description}</pre>
                        </div>
                    </div>
                  )
                })
              }
        </div>
      </div>
  </main>
  );
}