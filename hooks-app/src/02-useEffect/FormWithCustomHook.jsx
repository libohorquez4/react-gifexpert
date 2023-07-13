import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
// import { Message } from './Message';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;



    // const [formState, setFormState] = useState({
    //     username: 'usuario',
    //     email: 'email',
    //     password: '0000',
    // });

    // const {username, email, password} = formState;

    // const onInputChange = ({ target }) => {
    //     const {name, value} = target;
    //     setFormState({...formState, 
    //         [name]: value
    //     });
    // }

    // useEffect(() => {
    //     // console.log('useEffect called!!!')
    // }, []);

    // useEffect(() => {
    //     // console.log('formState changed!!!')
    // }, [formState]);

    // useEffect(() => {
    //     // console.log('email changed!!!')
    // }, [email]);

    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     // if ( inputValue.trim().length <= 1) return;
    //     // forma 1
    //     // setCategoriesProp(categories =>  [inputValue, ...categories])
    //     // onNewCategory(inputValue.trim());
    //     setFormState({
    //         username: '', 
    //         email: '',
    //     });
    // }

    return (
        <>
            <h1>Form con custom hook</h1>
            <hr />
            <input
                type='text'
                className='form-control'
                placeholder='User name'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='email'
                name='email'
                email={email}
                onChange={onInputChange}
                value={email}
            />

            <input
                type='password'
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                password={password}
                onChange={onInputChange}
                value={password}
            />

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Reset</button>

            {/* {username === 'username' && <Message /> } */}
        </>
    )
}
