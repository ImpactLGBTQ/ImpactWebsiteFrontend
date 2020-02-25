import * as React from 'react';
import $ from 'jquery';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PostForm extends React.Component {

    render() {
        return (
            <div className="form_container make_a_post_container">
                <div>
                    <h2>Make a post</h2>
                </div>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placehold="Enter title" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Post content" />
                    </Form.Group>
                </Form>
                <Button variant="primary" className="form_btn" type="submit">Post</Button>


            </div>
        );
    }

}


