import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render a main with an h1 text', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /ecommerce/i })
    ).toBeInTheDocument()
  })
})
