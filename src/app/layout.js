

import "./globals.css";
import styles from "../../sass/layout.module.scss";
export const metadata = {
  title: "Daily WOD",
  description: "See the daily workout of the day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.layoutBackground}>
      <body className={styles.layoutBody}>{children}</body>
    </html>
  );
}
