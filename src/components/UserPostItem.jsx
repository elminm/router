/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const UserPostItem = ({ data, updateData, removeItem }) => {
  return (
    <>
      {data.map(({ id, title, body }) => (
        <tr key={id}>
          <th scope="row">{id}</th>
          <td>{title}</td>
          <td>{body}</td>
          <td>
            <Link className="btn btn-warning" onClick={() => updateData(id)}>
              Edit
            </Link>
          </td>
          <td>
            <Link className="btn btn-danger" onClick={() => removeItem(id)}>
              Remove
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserPostItem;
