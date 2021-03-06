import styles from "./Profile.module.css";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>About Me</h4>
      <div className={styles.inner}>
        <ul className={styles.info_wrapper}>
          <li className={styles.info_item}>
            <span>π©</span>
            <p>1994.12.31</p>
          </li>
          <li className={styles.info_item}>
            <span>π </span>
            <p>κ²½κΈ°λ μμμ</p>
          </li>
          <li className={styles.info_item}>
            <span>π§</span>
            <p>khnm31@naver.com</p>
          </li>
          <li className={styles.info_item}>
            <span>π©βπ</span>
            <div>
              <p>μΈμ²κ°ν¨λ¦­λνκ΅ μ‘Έμ</p>
              <p className={styles.text_small}>νκ²½λμμΈνκ³Ό</p>
            </div>
          </li>
          <li className={styles.info_item}>
            <span>π©βπ</span>
            <p>λμ°μ¬μκ³ λ±νκ΅ μ‘Έμ</p>
          </li>
          <a
            href="https://hyemin12.github.io/hm_resume/"
            target="_blank"
            rel="noreferrer"
          >
            <li className={styles.info_item}>
              <span>π</span>
              <p className={styles.info_item_link}>μ΄λ ₯μ λ³΄λ¬κ°κΈ°</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Info;
