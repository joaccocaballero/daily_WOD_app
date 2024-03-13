'use client'
import Link from "next/link";
import { wod } from "../../data/data"; 
import styles from "../../sass/home.module.scss";

export default function Home() {
  const wodContent = wod[0]
  return (
  <main>
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className='text-[white] text-center font-teko text-9xl '>Daily WOD</h1>
      <div className="flex flex-col sm:flex-row  gap-3">
            <Link href={'/board'}>
                  <button type="button" className="btn glass w-[9rem] text-xl text-basic-white">
                      View Board
                  </button>
            </Link>
            <Link href={'/signin'}>

                 <button className="btn glass text-xl w-[9rem] text-basic-white">Sign In</button>
            </Link>
      </div>
    </div>
  </main>
  );
}
