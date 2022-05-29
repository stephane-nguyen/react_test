import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import apiRequest from './ApiRequest';
import { useState, useEffect } from 'react';

function App() {

	const API_URL = 'http://localhost:3500/items'

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	//is async, is triggered when the dependency [] is updated 
	useEffect(() => {

		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('404: Did not receive expected data');
				const listItems = await response.json();
				console.log(listItems);
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		//simulate loading page : see in the <main> with isLoading
		setTimeout(() => {
			// fetchItems does not return a value thus async IIFE (instantly invoked function expression) not required,you can just call fetchItems()
			(async () => await fetchItems())();
		}, 2000)

	}, [])
	//add async to addItem because the apiRequest is async 
	const addItem = async (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);

		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(myNewItem)
		};

		const result = await apiRequest(API_URL, postOptions);
		//if result, we have a msg not null
		if (result) setFetchError(result);
	}

	const handleCheck = async (id) => {
		const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
		setItems(listItems);

		const myItem = listItems.filter(item => item.id === id); //return an array

		const updateOptions = {
			method: 'PATCH', //update a specific item
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ checked: myItem[0].checked })
		};

		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, updateOptions);
		if (result) setFetchError(result);
	}

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

		const deleteOptions = { method: 'DELETE' };
		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, deleteOptions);
		if (result) setFetchError(result);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
	}

	return (
		<div className="App">
			<Header title="Grocery List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem
				search={search}
				setSearch={setSearch}
			/>
			<main>
				{isLoading && <p style={{ color: "blue" }}>Loading Items...</p>}
				{/* you know that the curly braces in JSX means process the inner value in JavaScript, so the outer braces is used exactly for this purpose.
				But the style property accepts an object. And an object also needs another pair of curly braces to wrap it up. That's the purpose for the inner ones.  */}
				{fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && <Content
					items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>}
			</main>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
