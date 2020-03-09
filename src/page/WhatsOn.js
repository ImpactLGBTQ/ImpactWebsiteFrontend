import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'
import './post.css';
import {PostForm} from "./MakeAPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import CONFIG from '../config.js';


// Fetches posts asyncthorusly from the backend
function getPosts(user, num, successCallback, errorCallback) {
    $.ajax({
        url: CONFIG['backend_url']+"/api/posting/get/"+num,
        crossdomain: true,
        headers: user.getAuthHeader(),
        success: successCallback,
        dataType: 'json',
    });

}

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.deleteSelf = this.deleteSelf.bind(this);
        this.state = {
            likes: 0,
            dislikes: 0,
        }
    }

    deleteSelf() {
        $.ajax({
            url: CONFIG['backend_url']+"/api/posting/del/"+this.props.uuid,
            success: () => alert("Success!"),
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="post_container">
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Subtitle>{this.props.author}</Card.Subtitle>
                            <Card.Text>
                                <br/>
                                {this.props.content}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    { (this.props.author_id == this.props.uuid) &&
                        // Delete abilities
                        <Col>
                            <Button onClick={this.deleteSelf}>Delete</Button>
                        </Col>

                    }

                </Row>
            </Container>
        );
    }


}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author_id: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
};

class WhatsOn extends MainPage {

    // This will have to be more complex as it fetches results from the backend
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
        this.postsCallback = this.postsCallback.bind(this);
        getPosts(props.user, 10,this.postsCallback )

    }

    postsCallback(data) {

        const posts = [];

        for (let i = 0; i < data.length; i++) {
            const post = data[i];
            posts.push(<Post title={post.title} content={post.content} author={post.author_name} uuid={post.uuid} author_id={post.author} />);
        }

        this.setState({
            posts: posts
        })
    };

    render() {
        return (
            <>
                {this.state.posts}
                <hr />
                <PostForm user={this.props.user} done_callback={() => {
                    getPosts(this.props.user, 10, this.postsCallback)
                }}/>
            </>
        );
    }

}


WhatsOn.propTypes = {
    user: PropTypes.object.isRequired
};

export default WhatsOn;
