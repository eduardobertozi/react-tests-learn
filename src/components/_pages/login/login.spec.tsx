import { render, screen } from '@testing-library/react'
import { Login } from '.'

describe('Test Login Component', () => {
  it('Should be a title write Sign In', async () => {
    render(<Login />)

    const title = await screen.findByRole('heading', {
      name: 'Sign In',
    })

    expect(title).toBeInTheDocument()
  })

  it('Should be two inputs on screen', async () => {
    render(<Login />)

    const inputs = await screen.findAllByRole('textbox')

    expect(inputs).toHaveLength(2)
  })

  it('Should be a button on screen', async () => {
    render(<Login />)

    const button = await screen.findByRole('button')

    expect(button.textContent).toBe('Login')
  })

  it('Should be a input to email', async () => {
    render(<Login />)

    const inputEmail = await screen.findByPlaceholderText('Insira seu email')

    expect(inputEmail).toBeInTheDocument()
  })

  it('Should be a input to password', async () => {
    render(<Login />)

    const inputPassword = await screen.findByPlaceholderText('Insira sua senha')

    expect(inputPassword).toBeInTheDocument()
  })
})
