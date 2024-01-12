const React = require('react');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* стили Bootstrap: */}
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        ></link>

        {/* стили для HomePage: */}
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/scripts/addUser.js" />
      </head>
      <body>
        {' '}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
