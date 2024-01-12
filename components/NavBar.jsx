const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="header">
          {/* <a href="/home">home</a> */}
          {user && <span>User: {user.name} Scores: {user.scores}</span>}
        </div>
        <div className="navbar-nav">
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div> */}
      </div>
    </nav>
  );
}

module.exports = NavBar;
