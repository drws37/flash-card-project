const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="containerForm">
        <h1 className="titleReg">Registration Page</h1>
        <form id="add-user">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;
