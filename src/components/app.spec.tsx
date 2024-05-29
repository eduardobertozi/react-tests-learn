import { render, screen } from '@testing-library/react'
import App from './app'

// describe('Testing the App component', () => {
//   it('Should be a title on page', async () => {
//     render(<App />)

//     const title = await screen.findByRole('heading')

//     expect(title).toBeInTheDocument()
//   })

//   it('Should be write on title: "Hello World"', async () => {
//     render(<App />)

//     const title = await screen.findByRole('heading')

//     expect(title.textContent).toBe('Hello World!')
//   })
// })

describe('Testing the App component with two titles', () => {
  it('Should be two titles on page', async () => {
    render(<App />)

    const titles = await screen.findAllByRole('heading')

    expect(titles).toHaveLength(2)
  })

  it('Should be write on title: "Hello World"', async () => {
    render(<App />)

    const title = await screen.findByRole('heading', {
      name: 'Hello World!',
    })

    expect(title).toBeInTheDocument()
  })
})
