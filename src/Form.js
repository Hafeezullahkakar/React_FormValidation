import React from 'react';

function Form() {
    return (
        <div className = 'form-wrapper'>
            <Form >
                <label htmlFor= 'name'>Name</label>
                <input type="text"  name= "name" id ='name' autoComplete='off' value ='' onChange={handleInput} />
                <label htmlFor= 'email'>Email</label>
                <input type="email"  name= "email" id ='email' autoComplete='off' value ='' onChange={handleInput} />
                <label htmlFor= 'url'>Website</label>
                <input type="url"  name= "url" id ='url' autoComplete='off' value ='' onChange={handleInput} />
                <label htmlFor= 'password'>Password</label>
                <input type="password"  name= "password" id ='password' autoComplete='off' value ='' onChange={handleInput} />
                <button onSubmit = {handleSubmit}>Register</button>
            </Form>            
        </div>
    );
}

export default Form;