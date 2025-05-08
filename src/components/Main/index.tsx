import * as S from './style'

export default function Main({ title = 'Top' }: { title: string }) {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  )
}
