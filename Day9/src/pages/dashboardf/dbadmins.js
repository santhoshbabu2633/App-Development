

import React, { forwardRef, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './dbadmins.css';

   const dbadmins = forwardRef(({}, ref) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      
      queryad: '',
    });
    function onSubmit(event) {
        event.preventDefault();
    
        
        const queryad = event.target[0].value;
        
        const timestamp = Date.now();
        const dataKey = `userData_${timestamp}`;
    
     
        const userData = {
         queryad
          
        };
    
        
        localStorage.setItem(dataKey, JSON.stringify(userData));
    
    
        navigate('/contact');
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }

 

    return (
        
            
            <div className='op'>
            <form>
            <div className='adv'><textarea
                name="query"
                placeholder="Enter Query"
                
                value={formData.queryad}
                onChange={handleInputChange}
                
               
              ></textarea></div>
              <button type="submit" ref={ref} className="btr">
              <div className="bro">Submit response</div>
            </button></form>
             </div>
            
        
    );

});
export default dbadmins;


