
import {Route, Routes} from 'react-router-dom'
import Home from '../components/pages/Home'
import Fetch from '../components/fetch'


function App() {
  return (

<div>
  
    <Routes>
      <Route path="/" element={<Fetch />} />
    </Routes>
</div>
  );
}

export default App;
