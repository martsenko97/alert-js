import React, { Component } from 'react';
import Contacts from './contacts';
import ContactForm from './ContactForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
			showForm: false,
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => this.setState({ contacts: data }))
			.catch(error => console.error('Error fetching contacts:', error));
	}

	handleDeleteContact = id => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== id),
		}));
	};

	handleShowForm = () => {
		this.setState({ showForm: true });
	};

	handleSaveContact = newContact => {
		this.setState(prevState => ({
			contacts: [
				...prevState.contacts,
				{ ...newContact, id: prevState.contacts.length + 1 },
			],
			showForm: false,
		}));
	};

	handleCancelForm = () => {
		this.setState({ showForm: false });
	};

	render() {
		const { contacts, showForm } = this.state;

		return (
			<div>
				{showForm ? (
					<ContactForm
						onSave={this.handleSaveContact}
						onCancel={this.handleCancelForm}
					/>
				) : (
					<Contacts
						contacts={contacts}
						onDelete={this.handleDeleteContact}
						onShowForm={this.handleShowForm}
					/>
				)}
			</div>
		);
	}
}

export default App;
