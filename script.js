// Example React App

// A simple Navbar component
const Navbar = () => {
    return (
      <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
        <a href="#" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Leaderboards</a>
        <a href="#" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Teams</a>
        <a href="#" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Players</a>
      </nav>
    );
  };
  
  // A simple Upcoming Matches component
  const UpcomingMatches = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Upcoming Matches</h2>
        <ul>
          <li>Team A vs Team B - Jan 25, 2025</li>
          <li>Team C vs Team D - Jan 26, 2025</li>
        </ul>
      </div>
    );
  };
  
  // The main App component
  const App = () => {
    return (
      <div>
        <Navbar />
        <header style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>Welcome to the School Sports Portal</h1>
          <p>Your hub for team updates, matches, and leaderboards.</p>
        </header>
        <UpcomingMatches />
      </div>
    );
  };
  
  // Render the App component to the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  