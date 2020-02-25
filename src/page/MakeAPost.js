import * as React from 'react';
import $ from 'jquery';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class PostForm extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        alert(event.target.title.value)
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
                        <Form.Control type="text" name="title" placehold="Enter title" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" as="textarea" name="content" placeholder="Post content" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control name="category" as="select">
                            <option>Whats on (Feed post)</option>
                            <option>Event (Impact only post)</option>
                        </Form.Control>
                        <Form.Label>Visibility</Form.Label>
                        <Form.Control as="select" name="visibility">
                            <option>Everyone</option>
                            <option>Impact members+</option>
                            <option>Staff</option>
                        </Form.Control>
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


