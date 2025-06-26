import { useState } from 'react';
import CardList from './CardList';
import SearchUser from './SearchUser';
import testData from './test-data.json';

function App() {
  const [profiles, setProfiles] = useState(testData);

  const searchUser = (username) => {
    console.log("username: ", username);

    const filtered = testData.filter(profile => 
      profile.login.toLowerCase().includes(username.toLowerCase())
    );

    setProfiles(filtered);
  };

  return (
    <div className="App">
      <h1>GitHub Card List</h1>
     <SearchUser onSearch={searchUser} /> 

      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
