import React, { useEffect, useState } from 'react'
import { Message } from '../01-useState/Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'usuario',
        email: 'email',
    });

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({...formState, 
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!!!')
    }, []);

    useEffect(() => {
        // console.log('formState changed!!!')
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!!!')
    }, [email]);

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
            <h1>Simple Form</h1>
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
            />

            {username === 'username' && <Message /> }
        </>
    )
}
