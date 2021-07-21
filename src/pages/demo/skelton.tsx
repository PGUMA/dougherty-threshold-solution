/* eslint-disable react-hooks/rules-of-hooks */
import { css } from '@emotion/css'
import { List } from 'src/components/skelton'
import { useEffect, useState, useCallback } from 'react'
import { sleep } from 'src/util'

const skelton: React.VFC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const loadDummy = useCallback(async () => {
    await sleep(3000)
    setIsLoading(false)
  }, [setIsLoading])

  useEffect(() => {
    loadDummy()
  }, [loadDummy])

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h1>スケルトン</h1>
        <List isLoading={isLoading} />
      </div>
    </div>
  )
}

export default skelton

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    background-color: white;
  `,
  contents: css`
    color: white;
    text-align: center;
    height: 80%;
    width: 80%;
    background-color: #191919;
    position: fixed;
    inset: 0;
    margin: auto;
  `,
}
