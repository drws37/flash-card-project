const React = require('react')
const Layout = require('./Layout')

function RegistrationPage({title}) {
  return(
    <Layout title={title}>
      <h1>Registration Page</h1>
      <div className="container">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </Layout>
  )
}

module.exports = RegistrationPage