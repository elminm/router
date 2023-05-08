/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner, Table } from "reactstrap";
import ErrorPage from "../components/ErrorPage";
import ModalStrap from "../components/ModalStrap";
import UserPostItem from "../components/UserPostItem";
const UserPosts = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [editId, setEditId] = useState(null);
  const [putDatas, setPutDatas] = useState({
    title: "",
    body: "",
  });
  const toggle = () => {
    setModal(!modal);
  };
  const [userPost, setUserPost] = useState({
    data: undefined,
    loader: false,
    error: undefined,
  });
  const getUserPost = () => {
    setUserPost((prev) => ({
      ...prev,
      data: undefined,
      loader: true,
      error: undefined,
    }));
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(({ data }) =>
        setUserPost((prev) => ({
          ...prev,
          data: data,
          loader: false,
          error: undefined,
        }))
      )
      .catch(({ message }) =>
        setUserPost({
          data: undefined,
          loader: false,
          error: message,
        })
      );
  };
  useEffect(() => {
    getUserPost();
  }, [id]);
  const removeItem = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((_) => getUserPost());
  };
  const changePost = (type, value) =>
    setPutDatas((prev) => ({
      ...prev,
      [type]: value,
    }));
  const saveData = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${editId}`, putDatas)
      .then((_) => getUserPost());
    setModal(!modal);
  };
  const updateData = (id) => {
    setEditId(id);
    setModal(!modal);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => setPutDatas({ title: data.title, body: data.body }));
  };
  return (
    <>
      {userPost.error && <ErrorPage />}
      {userPost.loader && <Spinner>Loading...</Spinner>}
      {userPost.data && userPost.data.length > 0 && (
        <>
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <UserPostItem
                data={userPost.data}
                updateData={updateData}
                removeItem={removeItem}
              />
            </tbody>
          </Table>
          <ModalStrap
            modal={modal}
            toggle={toggle}
            title={putDatas.title}
            body={putDatas.body}
            changePost={changePost}
            saveData={saveData}
          />
        </>
      )}
    </>
  );
};
export default UserPosts;
