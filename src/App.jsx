import React from "react";
import Kokkailist from "./components/Kokkailist";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://kokkai.ndl.go.jp/api/meeting_list?nameOfMeeting='
  const result = await axios.get(`${requestUrl}${keyword}${"&maximumRecords=20&recordPacking=json"}`);
  return result;
}


const App = () => {
  const words = ['東日本大震災','交通','科学技術'];
  return (
    <BrowserRouter>
    <div>
      <h1>国会議事録閲覧app</h1>
      <p>それぞれのキーワードが入った記事録が最新順で確認できます</p>
        <ul>
          <li>
            <Link to="/東日本大震災">東日本大震災</Link>
          </li>
          <li>
            <Link to="/交通">交通</Link>
          </li>
          <li>
            <Link to="/科学技術">科学技術</Link>
          </li>
        </ul>
        <hr />
      <Route exact path='/東日本大震災' render={(props) => <Kokkailist word={words[0]} getData={(keyword) => getDataFromAPI(keyword)} />} />
      <Route path='/交通' render={(props) => <Kokkailist word={words[1]} getData={(keyword) => getDataFromAPI(keyword)} />} />
      <Route path='/科学技術' render={(props) => <Kokkailist word={words[2]} getData={(keyword) => getDataFromAPI(keyword)} />} />
    </div>
    </BrowserRouter>
  );
};
export default App;