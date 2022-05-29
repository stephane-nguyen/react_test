import List from './List.js';
import Table from './Table.js';
import Form from './Form.js';

const Content = ({requestType,setRequestType,items}) => {
    return(
        <main>
            <Form requestType={requestType} setRequestType={setRequestType} />
            <List items={items} />
            <Table items={items} />
        </main>
    );
}

export default Content;