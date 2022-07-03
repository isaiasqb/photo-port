import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  //hook for email validation
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    //email validation, functionality imported from helpers
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // is valid conditional statement
      if(!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }

    setFormState({...formState, [e.target.name]: e.target.value })

    console.log('errorMEssage', errorMessage);

    if(!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }



  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}  />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
    )
  }
  
  export default ContactForm;