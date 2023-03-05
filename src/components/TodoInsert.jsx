import { useState, useCallback } from 'react'
import { DiAndroid } from 'react-icons/di'
import './TodoInsert.scss'

export default function TodoInsert({onInsert}) {
    const [value, setValue] = useState("");
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue("")// value값 초기화
            //서브밋 이벤트는 브라우저에서 새로고침을 발생시킴
            //이를 방지하기 위해 이 함수를 호출함
            e.preventDefault();
        },
        [onInsert, value],
    )
  return (
    <div>
      <form className='TodoInsert' onSubmit={onSubmit}>
        <input type="text"  placeholder='할 일을 입력하세요' 
            value={value} 
            onChange={onChange}
        />
        <button type='submit'>
            <DiAndroid/>
        </button>
      </form>
    </div>
  )
}
