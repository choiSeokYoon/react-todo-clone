import { MdCheckBox , MdCheckBoxOutlineBlank, MdIndeterminateCheckBox} from 'react-icons/md' 
import './TodoListItem.scss'
import cn from 'classnames'


function TodoListItem({todo, onRemove, onToggle}) {
    const {text,checked, id} = todo;
    console.log(todo)
  return (
    <div className='TodoListItem'>
        <div className={cn('checkBox',{checked})} onClick={()=>onToggle(id)}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={()=>{onRemove(id)}} >
            <MdIndeterminateCheckBox/>
        </div>
    </div>
  )
}
export default TodoListItem
