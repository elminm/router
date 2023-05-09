/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, CardHeader, CardText } from "reactstrap";
import Icon from "react-crud-icons";

const UserPostItem = ({ updateData, removeItem, id, title, body }) => {
  return (
    <Card className="my-2" color="dark" inverse>
      <CardHeader>
        <h4>{title.toUpperCase()}</h4>
      </CardHeader>
      <CardBody>
        <CardText>{body}</CardText>
      </CardBody>
      <CardFooter>
        <Icon
          className="btn"
          name="edit"
          theme="dark"
          size="medium"
          onClick={() => updateData(id)}
        />
        <Icon
          className="btn"
          name="delete"
          theme="dark"
          size="medium"
          onClick={() => removeItem(id)}
        />
      </CardFooter>
    </Card>
  );
};

export default UserPostItem;
