import Button from './Button.js';

function Form({ requestType, setRequestType }) {
    return (
        // avoid reloading the page by the default submit everytime a button is clicked
        <form onSubmit={(e) => e.preventDefault()}>
            <Button 
                buttonText = 'users'
                requestType={requestType}
                setRequestType={setRequestType}
            />
            <Button 
                buttonText = 'posts'
                requestType={requestType}
                setRequestType={setRequestType}
            />
            <Button 
                buttonText = 'comments'
                requestType={requestType}
                setRequestType={setRequestType}
            />
        </form>
    )
}

export default Form;