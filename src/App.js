
import { useSearchParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
function App() {

  const [URL, setURL] = useState('');
  const [searchParams, setsearchParams] = useState('');
  const [success, setSuccess] =useState(false);
  const [isButtonCLicked, setbuttonClicked] =useState(false);
  const PBK ='https://platformance.propertracker.app/conversion?type=tracking&pixel=s2s&click_id='

  useEffect(() => {
    const URL = window.location.search.split('uid=')[1];
   setsearchParams(URL)
   console.log(URL)

  }, []);

const FirePostback = async() => {
  setbuttonClicked(true);
 const fire = await axios.get(PBK+searchParams);
 console.log(fire);

 if(fire.data.response.status == 200) {
  setSuccess(true)
 }else{
  setSuccess(false)
 }
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://propertracker.com/wp-content/uploads/2023/01/logo_favicon-removebg-preview.png'} className="App-logo" alt="logo" />
        <p className='text-3xl text-black my-4'>
          Postback Fire Test..
        </p>
        <button onClick={FirePostback}
          className="bg-blue-500 rounded-lg text-[22px] cursor-pointer p-2 hover:bg-gray-500"
        >
          Fire Postback
        </button>

        {success&& <p className='text-green-600'>Successfully Fired Postback</p>}
        {(!success&& isButtonCLicked ) && <p className='text-red-600'> Postback Not Fired </p>}
      </header>
    </div>
  );
}

export default App;
