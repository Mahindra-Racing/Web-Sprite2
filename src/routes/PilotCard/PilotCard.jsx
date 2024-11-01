import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { DollarSign, Trophy, Users, Clock } from 'lucide-react'; // Importando ícones
import './PilotCard.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ff2f2f'];

const PilotCard = () => {
  const [pilots, setPilots] = useState([]);
  const [selectedPilot, setSelectedPilot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPilots = async () => {
    try {
      const response = await fetch('https://bd-web-ruddy.vercel.app/static');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPilots(data);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPilots();
  }, []);

  const handleSelectPilot = (pilotIndex) => {
    if (pilotIndex !== "") {
      const pilot = pilots[pilotIndex];
      setSelectedPilot(pilot);
    }
  };

  const renderLineChart = (data, title, dataKey, color) => {
    if (data && data.length > 0) {
      return (
        <div className="graph-section-STA">
          <h4>{title}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" />
              <Line type="monotone" dataKey={dataKey} stroke={color} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }
    return null;
  };

  const renderBarChart = (data, title, dataKey, color) => {
    if (data && data.length > 0) {
      return (
        <div className="graph-section-STA">
          <h4>{title}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" />
              <Bar dataKey={dataKey} fill={color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    return null;
  };

  const renderPieChart = (data, title) => {
    if (data && data.length > 0) {
      const total = data.reduce((sum, item) => sum + item[Object.keys(item)[1]], 0);
      const pieData = data.map(item => ({
        name: item.season,
        value: item[Object.keys(item)[1]]
      }));

      return (
        <div className="graph-section-STA">
          <h4>{title}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return <p>Carregando pilotos...</p>;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{error}</p>
        <p>Please check the server configuration and try again.</p>
      </div>
    );
  }

  return (
    <div className="app-STA">
      <h1 className="app-title-STA">Dashboard | Static</h1>

      <div className="pilot-selector-bar-STA">
        {pilots.map((pilot, index) => (
          <div 
            key={index} 
            className={`pilot-option-STA ${selectedPilot && selectedPilot.name === pilot.name ? 'selected' : ''}`}
            onClick={() => handleSelectPilot(index)}
          >
            <img src={pilot.image} alt={pilot.name} className="pilot-image-option-STA" />
            <span className='pilot-name-option-STA'>{pilot.name}</span>
          </div>
        ))}
      </div>

      {selectedPilot && (
        <div className="pilot-card-container-STA">
          <div className="pilot-card-STA">
            <div className="pilot-image-STA">
              <img src={selectedPilot.image} alt={selectedPilot.name} />
            </div>
            <div className="pilot-info-STA">
              <h2 className="pilot-name-STA">{selectedPilot.name}</h2>
              <h3 className="pilot-team-STA">Team: {selectedPilot.team}</h3>
              <p className="pilot-nationality-STA"><strong>Nationality:</strong> {selectedPilot.nationality}</p>
              <p className="pilot-age-STA"><strong>Age:</strong> {selectedPilot.age}</p>
              <p className="pilot-wins-STA"><strong>Wins:</strong> {selectedPilot.wins}</p>
              <p className="pilot-podiums-STA"><strong>Podiums:</strong> {selectedPilot.podiums}</p>
              <p className="pilot-podiums-STA"><strong>Bio:</strong> {selectedPilot.bio}</p>
            </div>
            <div className="pilot-stats-container-STA">
              <div className="stats-box-STA">
                <DollarSign /> <strong>Market Value:</strong> ${selectedPilot.marketValue.toLocaleString()}
              </div>
              <div className="stats-box-STA">
                <Trophy /> <strong>Rank:</strong> #{selectedPilot.rank}
              </div>
              <div className="stats-box-STA">
                <Users /> <strong>Titles:</strong> {selectedPilot.titles}
              </div>
              <div className="stats-box-STA">
                <Clock /> <strong>Avg Finish:</strong> {selectedPilot.averageFinish}
              </div>
            </div>
          </div>

          <div className="graphs-container-STA">
            {renderLineChart(selectedPilot.pointsData, "Points Over Seasons", "points", "#3BB4B4")}
            {renderBarChart(selectedPilot.fastestLapsData, "Fastest Laps Over Seasons", "fastestLaps", "#FF8042")}
            {renderPieChart(selectedPilot.polesData, "Poles Distribution")}
            {renderBarChart(selectedPilot.winsData, "Wins Over Seasons", "wins", "#00C49F")}
            {renderLineChart(selectedPilot.performanceData, "Performance Over Seasons", "performance", "#8884d8")}
            {renderBarChart(selectedPilot.averageFinishData, "Average Finish Over Seasons", "averageFinish", "#FFBB28")}
          </div>
        </div>
      )}
    </div>
  );
};

export default PilotCard;
