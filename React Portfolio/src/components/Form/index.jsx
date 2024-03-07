import { useState } from 'react';
import './style.css';

import { validateEmail } from '../../utils/helpers';

function Form() {

  const [formState, setFormState] = useState({ email: '', name: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(formState.email) || !formState.name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFormState({email: '', name: '', message: ''});
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={formState.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={formState.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;