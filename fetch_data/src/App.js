import React from 'react';
import Content from './Content.js';

import { useState, useEffect } from 'react';

function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com/';

    //hooks
    const [requestType, setRequestType] = useState('users');
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    //fetch data 
    useEffect(() => {
        const fetchItems = async () => {
            try {
                //for the path : api_url/requestype
                const response = await fetch(`${API_URL}${requestType}`);
                if (!response.ok) throw Error('Did not receive expected data');
                const data = await response.json();
                setItems(data);
                //make sure it is null if successful request of data
                setFetchError(null);
            }
            catch (err) {
                setFetchError(err.message)
            }
        }
        fetchItems();
    }, [requestType]);


    return (
        <div className="App">
            {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
            {!fetchError && <Content requestType={requestType} setRequestType={setRequestType} items={items} />}
        </div>
    );
}

export default App;
