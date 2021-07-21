import { css } from '@emotion/css'

const Avatar: React.VFC = () => {
  return (
    <div className={styles.wrapper}>
      <span>PG</span>
    </div>
  )
}

export default Avatar

const styles = {
  wrapper: css`
    background-color: white;
    width: 50px;
    color: black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}
