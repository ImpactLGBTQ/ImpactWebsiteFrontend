import * as React from 'react';
import $ from 'jquery';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CONFIG from '../config';
export class PostForm extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            "errors": [],
        }
    }

    onSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        let value_index;
        switch (event.target.category.value) {
            case "Whats on (Feed post)":
                value_index = 0;
                break;
            case "Event (Impact only post)":
                value_index = 1;
                break;
            default:
                this.setState({
                    "errors": this.state.errors.append("Unknown post type"),
                });
                return;
        }
        let access_index;
        switch (event.target.visibility.value) {
            case "Everyone":
                access_index = 0;
                break;
            case "Impact members+":
                access_index = 1;
                break;
            case "Staff":
                access_index = 2;
                break;
            default: 
                this.setState({
                    "errors": this.state.errors.append("Unkown visibility level"),
                })
                return;
        }

        const title = event.target.title.value
        const content = event.target.content.value

        const data = {"title": title, "content": content,
            "type": value_index, "access_level": access_index};
        // Send ajax request
        const url = CONFIG['backend_url']+"/api/posting/new/";
        $.ajax({
            url: url,
            headers: this.props.user ? this.props.user.getAuthHeader() : null,
            type: "POST",
            dataType: 'json',
            data: JSON.stringify(data),
            success: (data) => {
                this.props.new_post_callback(title, content, data['uuid']);
            },
            error: (xhr, code, err) => console.error("Failed to add a new post: "+err+"\nURL: "+url+"\nCODE: "+code
            +"\nReponse Text: "+xhr.responseText + "\nDATA: "+JSON.stringify(data))
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


