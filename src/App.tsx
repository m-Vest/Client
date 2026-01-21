import { router } from '../src/routes/router';  
import { RouterProvider } from 'react-router-dom';
import '../src/styles/index.css';
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;