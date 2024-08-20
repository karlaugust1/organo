import { useState } from 'react';
import Banner from './components/Banner'
import Forms from './components/Forms';

function App() {
  const [users, setUsers] = useState([])

  const onSave = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Forms onSave={onSave}/>
    </div>
  );
}

export default App;
