/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Spinner, Table } from "reactstrap";

const Users = ({ data }) => {
  return (
    <>
      {data.error && "Error Occurred"}
      {data.loader && <Spinner color="danger">Loading...</Spinner>}
      {data.data && (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map(({ id, name, username, email }) => (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/userposts/${id}`}>
                      See Posts
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Users;
