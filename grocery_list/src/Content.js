import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        //fragment <> : in react, jsx needs to be in a element and we use the fragment since the <main> element is in the app component jsx
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content;
