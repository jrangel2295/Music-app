import { useState } from 'react';
import DashBoard from './components/Dashboard/Dashboard';
import SignUp from './components/Dashboard/Signup';

function App() {
  const [isLogged, setIsLogged] = useState(true)
  return (
    <div className="App">
      {isLogged ? <DashBoard /> : <SignUp />}
      </div>
  );
}

export default App;
