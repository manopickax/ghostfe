import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const App = () => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  
  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const sendLocation = async () => {
    var queryParams = `?province=${encodeURIComponent(province)}&city=${encodeURIComponent(city)}&district=${encodeURIComponent(district)}`;
    var url = "http://3.134.101.158:8080/ghost" + queryParams;

    try {
      let response = await fetch(url);
      let data = await response.json();
      
      localStorage.setItem('probability', data.probability);
      
      // Navigate to /result
      navigate('/result');
      
    } catch (error) {
        console.error("요청 실패:", error);
    }
};
return (
      <div className="container">
          <h1>당신의 주위에는 귀신이 있다</h1>
          <img src="./radar-love-search.gif" alt="radargif"/>
          
          <div className="search-box">
              <input type="text"
                     value={province}
                     onChange={e => setProvince(e.target.value)}
                     placeholder="도/도시 입력 !!!"/>
              <input type="text"
                     value={city}
                     onChange={e => setCity(e.target.value)}
                     placeholder="시/군/구 입력 !!!"/>
              <input type="text"
                     value={district}
                     onChange={e => setDistrict(e.target.value)}
                     placeholder= "동/읍/면 입력 !!!"/>
              <button type="submit" onClick={() => sendLocation()}>귀신 탐색..</button>
          </div>
      </div>
  );
}

export default App;
