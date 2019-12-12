import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/searchBar';
import Logs from './components/logs/logs';
import AddBtn from './components/layout/addBtn';
import AddLogModal from './components/logs/addLogModal';
import EditLogModal from './components/logs/editLogModal';
import AddTechModal from './components/techs/addTechModal';
import TechListModal from './components/techs/techListModal';
import { Provider } from 'react-redux'
import store from './store'

import "materialize-css/dist/css/materialize.min.css"
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {

  useEffect(() => M.AutoInit())

  return (
    <Provider store={ store }>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
