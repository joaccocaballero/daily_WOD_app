

import styles from "../../../sass/layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutBody}>{children}</div>
    </div>
  );
}
