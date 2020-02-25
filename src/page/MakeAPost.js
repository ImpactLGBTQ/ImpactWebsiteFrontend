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

        const data = {"title": event.target.title.value, "content": event.target.content.value,
            "type": event.target.category.value, "access_level": event.target.visibility.value}

        // Send ajax request
        $.ajax({
            url: "http://localhost:8000/api/posting/new/",
            headers: this.props.user ? this.props.user.getAuthHeader() : null,
            type: "POST",
            dataType: 'json',
            data: data,
            success: () => {
                alert("Posted successfully!");
            },
            error: () => alert("Error"),
        });
    }


    render() {
        return (
            <div className="form_container">
                <Form onSubmit={this.onSubmit}>
                    <Form.Label><h3>New post</h3></Form.Label>
                    <Form.Group>
                        <Form.Control type="text" name="title" placeholder="Enter title" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" as="textarea" name="content" placeholder="Enter content" required />
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
                    <Button variant="primary" className="form_btn" type="submit">Submit</Button>
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


