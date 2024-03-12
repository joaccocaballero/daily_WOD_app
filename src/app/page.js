'use client'
import { wod } from "../../data/data"; 
import styles from "../../sass/home.module.scss";

export default function Home() {
  const wodContent = wod[0]
  return (
  <main className={styles.mainContainer}>
    <div className={styles.verticalTextContainer}>
      <div className={styles.verticalText} data-text={wodContent.className}>{wodContent.className}</div>
    </div>
    {/* <div className="flex h-full w-[70%] relative"> 
          <div className="flex flex-col justify-around h-[95%] w-full rounded-md gap-10 p-5 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white shadow-lg border md:text-white border-gray-200">
                {
                  wodContent.exercises.map((item)=>{
                    return(
                      <div className="flex flex-col" key={wodContent.indexOf(item)}  >
                          <h1 className="font-teko text-white text-6xl text-center mb-2">{item.title.toUpperCase()}</h1>
                          <h2 className="font-teko font-medium text-4xl text-left">{item.subtitle}</h2>
                          <pre className="font-teko font-light text-4xl text-left p-1">{item.description}</pre>
                      </div>
                    )
                  })
                }
          </div>
    </div> */}
  </main>
  );
}
