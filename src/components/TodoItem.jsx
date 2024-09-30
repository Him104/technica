import React from 'react'

const TodoItem = ({task, completed}) => {
  return (
    <li className='p-2 border-b'>
{task}

    </li>
  )
}

export default TodoItem
