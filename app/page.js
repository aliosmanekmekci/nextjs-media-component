"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ReactPlayer url="https://www.youtube.com/watch?v=RY6B7JSBRRg&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=2" />
      </div>
    </main>
  );
}
