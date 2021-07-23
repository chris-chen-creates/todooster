import Todo from '../components/Todo'
import { render, fireEvent, screen, getByText } from '@testing-library/react'

test('testing works', () => {
  expect(true).toBe(true)
})

describe('Todo', () => {
  test('todo completes', () => {
    const handleTaskComplete = jest.fn()

    const todo = {
      id: 'a',
      task: 'walk the dog',
      isComplete: false,
    }

    const handleTaskDelete = jest.fn()

    render(
      <Todo
        todo={todo}
        handleTaskComplete={handleTaskComplete}
        handleTaskDelete={handleTaskDelete}
      />
    )

    expect(screen.getByText('walk the dog')).toBeTruthy()
  })

  test('create todo', () => {
    
  })
})
