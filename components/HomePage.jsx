const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');
const ThemeList = require('./ThemeList');

function HomePage({ title, themeList, user }) {
  return (
    <Layout title={title} user={user}>
      <NavBar user={user} />
      <ThemeList themeList={themeList} />
    </Layout>
  );
}

module.exports = HomePage;
