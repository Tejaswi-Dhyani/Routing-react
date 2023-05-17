
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Contact } from './Contact';
import { Notfound } from './Notfound';

import { Home } from './Home';

function App() {
  return (
    <>
    
    <div className="App">
    
{/* <Switch>

  <Route path="/" component={About}/>
  <Route path="/contact" component={Contact}/>
</Switch> */}
<Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Notfound />} />
     
      </Routes>
    </div>
    </>
  
  );
}

export default App;
