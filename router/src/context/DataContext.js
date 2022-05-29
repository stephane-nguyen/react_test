//we might want to create several DataContext for bigger app
//example: if in the user section (where the user entered information) we want to seperate context to manage state

import { createContext, useState, useEffect } from "react";
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const { width } = useWindowSize()
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]) //useEffect is activated when the dep is changing : here data 

    useEffect(() => {
        const filteredResults = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    return (
        // all of the hooks
        <DataContext.Provider value={{
            width, search, setSearch, 
            searchResults, fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;

