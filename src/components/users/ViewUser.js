import React from "react"

const ViewUser = () => {
  return (
<div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <Link className="btn btn-outline-danger" to="/">
            Cancel
          </Link>
          <button type="submit" className="btn btn-outline-primary mx-2">
            Submit
          </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ViewUser;
