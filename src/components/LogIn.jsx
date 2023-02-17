import React from "react";

function LogIn({ setLogin }){
    const [val1, setVal1] = React.useState('')
    const [val2, setVal2] = React.useState('')

    function checking(){
        if(val1 === 'admin' && val2 === 'admin'){
            setLogin(true)  
            alert ('Вы упешно вошли')   
        }else{
            alert('Неверный логин или пароль')
        }
    }

    return(
        <div>
            <h1 className="h1">Вход</h1>
            <input className="inp" type="text" value={val1} onChange={(event) => setVal1(event.target.value)} placeholder='Логин' />
            <input className="inp" type="text" value={val2} onChange={(event) => setVal2(event.target.value)} placeholder='Пароль'/>
            <button className="btn" onClick={() => checking()}>Войти</button>
        </div>
    )
}

export default LogIn