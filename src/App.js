import { useState } from 'react';
import Banner from './components/Banner'
import Forms from './components/Forms';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Dev',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    }
  ]

  const [users, setUsers] = useState([])

  const onSave = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Forms onSave={onSave} teams={teams.map(team => team.name)} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        users={users.filter(u => u.team === team.name)}
      />)}
    </div>
  );
}

export default App;
