import { css, cx } from '@emotion/css'
import Card from './Card'

type Props = {
  isLoading: boolean
}

const List: React.VFC<Props> = ({ isLoading }) => {
  return (
    <div className={style}>
      <Card isLoading={isLoading} />
      <Card isLoading={isLoading} />
      <Card isLoading={isLoading} />
    </div>
  )
}

export default List

const style = css`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
