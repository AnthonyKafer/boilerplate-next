import { render, screen } from '@testing-library/react'
 
 import Fodase from '.'
 
 describe('<Fodase />', () => {
   it('should render the heading', () => {
     const { container } = render(<Fodase />)
 
     expect(screen.getByRole('heading', { name: /Fodase/i })).toBeInTheDocument()
 
     expect(container.firstChild).toMatchSnapshot()
   })
 })