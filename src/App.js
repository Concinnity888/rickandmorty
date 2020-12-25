import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CharacterPage } from './pages/CharacterPage';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentCharacter, setCurrentCharacter] = useState();
  const [totalCount, setTotalCount] = useState(0);

  function handleGetCharacter (character) {
    setCurrentCharacter(character);
  }

  useEffect(() => {
    if (loading) {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then(response => {
          setData([...data, ...response.data.results]);
          setCurrentPage(prevState => prevState + 1);
          setTotalCount(response.data.info.count);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  const handleScroll = (evt) => {
    if (evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight) < 100 && data.length < totalCount) {
      setLoading(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return function () {
      document.removeEventListener('scroll', handleScroll)
    };
  });

  return (
    <Router>
      <div className="App">
        <Header />

        <main className="Content">
          <Switch>
            <Route path="/character:id">
              <CharacterPage character={currentCharacter} />
            </Route>
            <Route path="/">
              {data && <HomePage data={data} onClickLink={handleGetCharacter} />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
