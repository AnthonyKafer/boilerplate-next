import React from 'react'
import GlobalStyles from '../src/style/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
