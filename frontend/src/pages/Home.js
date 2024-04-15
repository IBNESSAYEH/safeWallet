import React from 'react';
import link, { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

  const [userData, setUserData] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/showUser', {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setUserData(response.data.user);
        setWalletBalance(response.data.wallet);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <>
      
      <div className="container align-items-center mt-3">
      {userData && (  <h2>Bonjour, {userData.name}</h2> )}
      {walletBalance && (
          <div className="bg-primary text-white p-3 py-4 text-center rounded mb-4">
            <h2 className="font-weight-bold">Total en Solde</h2>
            <h3>${walletBalance}</h3>
          </div>
        )}
        <div className="row">
          <div className="col">
            <div className="card card-hover" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Recevoir</h5>
                <svg xmlns="http://www.w3.org/2000/svg" className='small-icon' style={{ rotate: '180deg' }} viewBox="0 0 512 512">
                {
                    // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com 
                    // License - https://fontawesome.com/license/free (Copyright 2024 Fonticons, Inc.)
                }
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-hover" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Payer</h5>
                <svg xmlns="http://www.w3.org/2000/svg" className='small-icon' viewBox="0 0 512 512">
                {
                    // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com 
                    // License - https://fontawesome.com/license/free (Copyright 2024 Fonticons, Inc.)
                }
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
                </svg>

              </div>
            </div>
          </div>
          <Link to="/recharge" className="col">
        
            <div className="card card-hover" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Recharger</h5>
                <svg xmlns="http://www.w3.org/2000/svg" className='small-icon' viewBox="0 0 512 512">
                    {
                    //Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                    }
                    <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
              </div>
            </div>
          
          </Link>
         
          <Link className="col" to='/Retirer'>
            <div className="card card-hover" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Retirer</h5>
                

                <svg xmlns="http://www.w3.org/2000/svg" className='small-icon' viewBox="0 0 640 512">
                    {
                     //Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                     }
                    <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
