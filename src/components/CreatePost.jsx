/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const CreatePost = ({ users }) => {
  const [modal, setModal] = useState(false);
  const [postDataId, setPostDataId] = useState(0);
  const [postData, setPostData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const toggle = () => {
    setModal(!modal);
  };
  const getUserId = (userId) => {
    setPostDataId(userId);
  };
  const changePostData = (name, value) => {
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const postDataToApi = () => {
    postDataId == 0
      ? alert("You must choose a user")
      : axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            ...postData,
            userId: +postDataId,
          })
          .then(() => {
            toggle();
            setPostData({
              userId: "",
              title: "",
              body: "",
            });
            setPostDataId(0);
          });
  };
  return (
    <>
      <button className="btn btn-success" onClick={toggle}>
        CreatePost
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Post</ModalHeader>
        <ModalBody>
          <Input type="select" onChange={(e) => getUserId(e.target.value)}>
            {users && users.length > 0 && (
              <>
                <option value="0" selected disabled>
                  All Users
                </option>
                {users.map((user) => (
                  <option value={user.id} key={user.id}>
                    {user.username}
                  </option>
                ))}
              </>
            )}
          </Input>
          <Input
            type="text"
            name="title"
            value={postData.title}
            onChange={(e) => changePostData("title", e.target.value)}
          />
          <Input
            type="text"
            name="body"
            value={postData.body}
            onChange={(e) => changePostData("body", e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={postDataToApi}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreatePost;
