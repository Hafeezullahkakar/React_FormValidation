import React, { useState } from 'react';
function Form() {
    const[user, setUser] = useState({
        name:'',
        email:'',
        url:'',
        password:'' 
    });
    const[records , setRecord] = useState([])
    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name] : value })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRec = {...user}
        setRecord([...records, newRec])
        setUser({ name:'',  email:'',url:'', password:'' })
    }
    return (
        <>
        <div className = 'form-wrapper'>
            <form onSubmit = {handleSubmit} >
                <h1>Register</h1>
                <label htmlFor='name'>Name</label>
                <input type="text"  name= 'name' id ='name' autoComplete='off' value ={user.name} onChange ={handleInput} />
                <label htmlFor= 'email'>Email</label>
                <input type="text"  name= 'email' id ='email' autoComplete='off' value ={user.email}  onChange ={handleInput}/>
                <label htmlFor= 'url'>Website</label>
                <input type="text"  name= 'url' id ='url' autoComplete='off' value ={user.url} onChange ={handleInput} />
                <label htmlFor= 'password'>Password</label>
                <input type="password"  name= 'password' id ='password' autoComplete='off' value ={user.password} onChange ={handleInput}/>
                <button className = 'button'  >Register</button>
            </form>            
        </div> 

        <di className = "Table">
            {
              records.map(rec =>{
                  const{name, email, url, password} = rec;
                  return(
                      <div className = 'user-data'>
                      <p>{name}</p>
                      <p>{email}</p>
                      <p>{url}</p>
                      <p>{password}</p>
                      </div>
                  )
              })        
            
                }
        </di>
        </>
        );}
export default Form;