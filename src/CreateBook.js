import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class CreateBook extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const description = event.target.formDescription.value;
    const author = event.target.formAuthor.value;

    const newBook = { title: title, description: description, author: author };
    this.props.postBooks(newBook);
    this.props.closeModal();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Book Here!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={this.handleUserNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                onChange={this.handleUserNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="Author"
                placeholder="Enter Author"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add A Book!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
