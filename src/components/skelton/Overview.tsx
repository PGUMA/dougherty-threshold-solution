import { css } from '@emotion/css'

const Overview: React.VFC = () => {
  return (
    <div className={styles.wrapper}>
      <p>テスト概要</p>
    </div>
  )
}

export default Overview

const styles = {
  wrapper: css`
    background-color: white;
    color: black;
    width: 450px;
    height: 50px;
  `,
}
