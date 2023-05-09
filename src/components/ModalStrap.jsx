/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function ModalStrap({ toggle, modal, title, body, changePost, saveData }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            onChange={(e) => changePost("title", e.target.value)}
            value={title}
          />
          <Input
            type="textarea"
            rows="5"
            onChange={(e) => changePost("body", e.target.value)}
            value={body}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={saveData}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalStrap;
