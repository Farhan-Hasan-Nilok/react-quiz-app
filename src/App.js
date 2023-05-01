
import { RouterProvider } from 'react-router-dom';
import '../src/styles/App.css';
import { router } from './Components/routes/router';
// import Layout from './Components/Layout';
// import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
