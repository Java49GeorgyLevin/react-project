import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { getValue } from '@testing-library/user-event/dist/utils';
import { stringify } from 'querystring';
import { parse } from 'path';

function App() {
  const flexColumn : React.CSSProperties = {display: 'flex', flexDirection: 'column'};
  const flexRow: React.CSSProperties = {display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '80vw',
  margin: '2vw'};

  return <div style={flexColumn}>
      <div style={flexRow}>
        <Timer cityOrCountry=''></Timer>
        <Timer cityOrCountry=''></Timer>
      </div>
      <div style={flexRow}>
        <Timer cityOrCountry=''></Timer>
        <Timer cityOrCountry=''></Timer>
      </div>
    </div>
}

export default App;
