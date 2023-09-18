import React from 'react';
// Import useNavigate instead of useHistory
import { useNavigate } from 'react-router-dom';
import './style.css';

const Result= ({ probability }) => {

   // Use useNavigate instead of useHistory
   const navigate=useNavigate();

   const goToBackPage=()=>{
     navigate('/');
   }
  return (
    <div className="container">
      <h1>귀신이 나타났다!</h1>
      <img src="ghost.png" alt="ghost" width="200px" height="auto"/>
      <div className="result-box">
        <p>{probability}</p>
        <button type="button" onClick={goToBackPage}>돌아가기</button>
      </div>  
    </div>
  );
};

export default Result;
