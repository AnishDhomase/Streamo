import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import ChannelDetail from './components/ChannelDetail';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';

import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#EEF5FF' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>  
  );
}  

export default App;


