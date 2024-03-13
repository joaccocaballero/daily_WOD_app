

import "./globals.css";
import styles from "../../sass/layout.module.scss";


export const metadata = {
  title: "Daily WOD",
  description: "See the daily workout of the day",
};

export default function RootLayout({ children }) {
  return (
    <html className={styles.layoutBackground}>
      <body>{children}</body>
    </html>
  );
}
