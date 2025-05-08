import GlobalStyles from '@/style/global'
import { PropsWithChildren } from 'react'

export default function StyleProvider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
