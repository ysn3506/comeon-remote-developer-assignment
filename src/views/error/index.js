import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'

function ErrorView() {
    
    const navigate = useNavigate();
    return (
      <div className="error-wrapper">
        <h1>Ooopss! Something went wrong!</h1>
        <button className="ui black button"  type="button" onClick={()=>navigate("/")}>Try Again</button>
        
      </div>
    );
};

export default ErrorView;