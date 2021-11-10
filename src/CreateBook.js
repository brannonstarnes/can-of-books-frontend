import {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateBook extends Component {


    handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.formTitle.value;
        const description = event.target.formDescription.value;
        const email = event.target.formEmail.value;
        
        const newBook = { title: title, description: description, email: email };
        this.props.postBooks(newBook);
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={this.handleUserNameChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" onChange={this.handleUserNameChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
               <Button variant="primary" type='submit' >Submit</Button>
            </Form>
        ) 
    }

}