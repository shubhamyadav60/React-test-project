import './App.css'
import "./index.css";
import RouterManager from './routes/RouterManager/RouterManager'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <RouterManager />
    </>
  )
}

export default App
