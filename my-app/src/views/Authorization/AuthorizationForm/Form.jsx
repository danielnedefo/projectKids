import React from 'react'
const LoginLogoutForm = ({onSubmitRegister,state,handleChange,setActionType}) => {

  return (
    <form action="submit" onSubmit={onSubmitRegister}>
      <button type="submit" onClick={()=>setActionType("google")}>Google Authorisation</button>
      <label htmlFor="emailForm"/>
      <input onChange={handleChange} id="emailForm" type="email" name="email" value={state.email}/>
      <label htmlFor="passwordForm"></label>
      <input onChange={handleChange} type="password" id="passwordForm" name="password" value={state.password}/>
      <button type="submit" onClick={()=>setActionType("register")}>Зарегистрироваться</button>
      <button type="submit" onClick={()=>setActionType("login")}>Авторизироваться</button>
    </form>
   );
}
 
export default LoginLogoutForm;