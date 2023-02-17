import React from "react";

function Reg({ setUsers, users }){

    const [val1, setVal1] = React.useState('')
    const [val2, setVal2] = React.useState('')
    const [val3, setVal3] = React.useState('')

    const [newUser, setNewUser] = React.useState({name: '', pass: ''})

    function checking(){
        if(val2 === val3){
            setNewUser({name:val1, pass:val2})
            setUsers([...users, newUser])
            console.log(users)
            alert('Вы успешно зарегистрировались')
        }else{
            console.log('not');
        }
    }

    return(
        <div>
            <h1 className="h1">Регистрация</h1>
            <input className="inp" type="text" value={val1} onChange={(event) => setVal1(event.target.value)} placeholder='Логин' />
            <input className="inp" type="text" value={val2} onChange={(event) => setVal2(event.target.value)} placeholder='Пароль'/>
            <button className="btn" onClick={() => checking()}>Регистрация</button>
        </div>
    )
}

export default Reg