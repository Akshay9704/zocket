import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import CreateCampaign from './components/createCampaign';
import Campaigns from './components/campaigns';
import Header from './components/header';
import Sidebar from './components/sidebar';
function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [product, setProduct] = useState([]);
  const [settings, setSettings] = useState({
    start: '',
    end: '',
    location: '',
  });
  const [campaignList, setCampaignList] = useState(getCampaignfromLocalStorage);
  console.log(campaignList);
  localStorage.setItem('campaignList', JSON.stringify(campaignList));
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Campaigns campaignList={campaignList} />} />
          <Route path='/create' element={<CreateCampaign campaigns={campaigns} setCampaigns={setCampaigns} product={product} setProduct={setProduct} campaignList={campaignList} setCampaignList={setCampaignList} settings={settings} setSettings={setSettings} />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </>
  );
  function getCampaignfromLocalStorage() {
    const List = JSON.parse(localStorage.getItem('campaignList'));
    if (List) {
      return List;
    } else {
      return [];
    }
  }
}

export default App;
