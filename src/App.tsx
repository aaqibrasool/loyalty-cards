import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCards from './pages/AllCards';
import CardDetails from './pages/CardDetails';
import CreateCard from './pages/CreateCard';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/cards" element={<AllCards />} />
            <Route path="/cards/create" element={<CreateCard />} />
            <Route path="/cards/:cardId" element={<CardDetails />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App