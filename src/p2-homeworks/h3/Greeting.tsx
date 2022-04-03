import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    setEnterCallback: (e: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, setEnterCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputErrorClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div className={'hw3'}>
            {/*<input value={name} onChange={setNameCallback} onKeyDown={setEnterCallback}*/}
            {/*       className={`${s.inputClass} ${inputErrorClass}`}/>*/}
            <SuperInputText value={name} onChange={setNameCallback} onKeyDown={setEnterCallback}
                            error={error}/>
            {/*<button className={s.button} onClick={addUser}>add</button>*/}
            <SuperButton onClick={addUser}>add</SuperButton>

            <span>{totalUsers}</span>
            {/*<div className={s.errorMessage}>{error}</div>*/}
        </div>
    )
}

export default Greeting
