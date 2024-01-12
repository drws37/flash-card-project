const React = require('react');

function Theme({ theme }) {
  return (
    <div className="theme">
      <div className="themeImg">
        <img src={theme.theme_image} alt="img" />
      </div>
      <p>{theme.title}</p>
      <a href={`/question/1/${theme.id}`} className="btnStartGame">
        Start game
      </a>
    </div>
  );
}

module.exports = Theme;
