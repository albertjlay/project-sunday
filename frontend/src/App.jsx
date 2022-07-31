import React from 'react';
import './App.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

function App() {
  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div className='App'>
      <main>
        <div className='stock-name'>Stock Name</div>
        <div className='stock-price'>
          <div className='chart'>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
          <div className='sidebar'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
