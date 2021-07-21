import { css } from '@emotion/css'

const Detail: React.VFC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.paragraph}>テスト文章</span>
      <span className={styles.paragraph}>テスト文章</span>
      <span className={styles.paragraph}>テスト文章</span>
      <span className={styles.paragraph}>テスト文章</span>
    </div>
  )
}

export default Detail

const styles = {
  wrapper: css`
    background-color: none;
  `,
  paragraph: css`
    background-color: white;
    color: black;
    display: block;
    height: 20px;
    margin-top: 4px;
  `,
}
