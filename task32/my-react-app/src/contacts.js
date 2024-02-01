import React from 'react';

class Contacts extends React.Component {
	render() {
		const { contacts, onDelete, onShowForm } = this.props;

		return (
			<div>
				<h2>Список контактів</h2>
				<table style={{ marginLeft: '20px' }}>
					<thead>
						<tr>
							<th>Ім'я</th>
							<th>Прізвище</th>
							<th>Телефон</th>
							<th>Дії</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map(contact => (
							<tr key={contact.id}>
								<td>{contact.name}</td>
								<td>{contact.username}</td>
								<td>{contact.phone}</td>
								<td>
									<button onClick={() => onDelete(contact.id)}>Видалити</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={onShowForm}>Додати новий контакт</button>
			</div>
		);
	}
}

export default Contacts;
