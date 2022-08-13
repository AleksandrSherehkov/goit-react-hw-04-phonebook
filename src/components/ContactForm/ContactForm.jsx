import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNunber = e => setNumber(e.currentTarget.value);

  const handleSubmitForm = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label className={s.label}>
        <span className={s.title}>Name</span>
        <input
          className={s.input}
          placeholder="Enter full name"
          onChange={handleChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Number</span>
        <input
          className={s.input}
          placeholder="Enter number"
          onChange={handleChangeNunber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
