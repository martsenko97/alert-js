import React, { useState } from 'react';

const ContactForm = ({ onSave }) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [phone, setPhone] = useState('');

	const handleSave = () => {
		onSave({ name, username, phone });
		setName('');
		setUsername('');
		setPhone('');
	};

	return (
		<div>
			<h2>Форма додавання нового контакту</h2>
			<form>
				<label>
					Ім'я:
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Прізвище:
					<input
						type='text'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Телефон:
					<input
						type='text'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</label>
				<br />
				<button type='button' onClick={handleSave}>
					Зберегти
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
