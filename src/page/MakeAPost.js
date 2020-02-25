import * as React from 'react';
import $ from 'jquery';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PostForm extends React.Component {


    onSubmit(event) {
        const form = event.currentTarget;
        alert("Done!");

        if (form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.
    }


    render() {
        return (
            <div className="form_container make_a_post_container">
                <div>
                    <h2>Make a post</h2>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placehold="Enter title" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Post content" required />
                    </Form.Group>
                    <Button variant="primary" className="form_btn" type="submit">Post</Button>
                </Form>

            </div>
        );
    }

}


export default class MakeAPost extends React.Component {
    render() {
        return (
            <div className="make_a_post_body">
                <PostForm />
            </div>
        )
    }
}


