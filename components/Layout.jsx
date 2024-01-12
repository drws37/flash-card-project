const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* стили для HomePage: */}
        <link rel="stylesheet" href="/style/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
