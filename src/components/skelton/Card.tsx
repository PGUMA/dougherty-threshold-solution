import { css } from '@emotion/css'
import Avatar from './Avatar'
import Overview from './Overview'
import Detail from './Detail'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { not } from 'src/util'

type Props = {
  isLoading: boolean
}

const Card: React.VFC<Props> = ({ isLoading }) => {
  return (
    <div className={styles.cardWrapper}>
      {isLoading && (
        <>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <div className={styles.cardHead}>
              <Skeleton circle={true} height={50} width={50} />
              <Skeleton height={50} width={450} />
            </div>
            <div className={styles.cardBody}>
              <Skeleton height={20} count={4} />
            </div>
          </SkeletonTheme>
        </>
      )}
      {not(isLoading) && (
        <>
          <div className={styles.cardHead}>
            <Avatar />
            <Overview />
          </div>
          <div className={styles.cardBody}>
            <Detail />
          </div>
        </>
      )}
    </div>
  )
}

export default Card

const styles = {
  cardWrapper: css`
    border: solid 1px black;
    width: 500px;
    padding: 10px;
    border-radius: 10px;
    background-color: grey;
  `,
  cardHead: css`
    display: flex;
  `,
  cardBody: css``,
}
