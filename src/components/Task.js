import { IoMdTrash} from 'react-icons/io'

export const Task = ({task, onDelete}) => {
  return (
    <div className="task">
        <h3>
            {task.text} <IoMdTrash style={{color: 'red', cursor: 'pointer'}}
             onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task