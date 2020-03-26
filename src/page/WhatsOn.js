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
function getPosts(user, start, num, successCallback, errorCallback) {
    $.ajax({
        url: CONFIG['backend_url']+"/api/posting/get/"+start+"/"+num,
        //crossdomain: true,
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
                                <Card.Subtitle>{this.props.author_name}</Card.Subtitle>
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
    author_name: PropTypes.string.isRequired,
    author_id: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
};

class WhatsOn extends MainPage {

    // This will have to be more complex as it fetches results from the backend
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
        this.postsCallback = this.postsCallback.bind(this);
        this.addPost = this.addPost.bind(this);
        getPosts(props.user, 0, 10,this.postsCallback )

    }

    postsCallback(data) {

        const posts = [];

        for (let i = 0; i < data.length; i++) {
            const post = data[i];
            posts.push({"title": post.title, "content": post.content, "author_name": post.author_name, "author_id": post.author, "uuid": post.uuid});
        }
        this.setState({
            posts: posts
        });
    };
    addPost(title, content, uuid) {
        this.state.posts.push({"title": title, "content": content, "author_name": this.props.user.getUsername(), "author_id": this.props.user.getUUID(), "uuid": uuid})
        // Trigger a re-render
        this.forceUpdate();
    }

    render() {
        return (
            <>  
                <div><h5>Displaying {this.state.posts.length} posts</h5></div>
                <div>
                    {this.state.posts.map(function(post, index) {
                        return (<Post title={post.title} content={post.content} author_name={post.author_name} uuid={post.uuid} author_id={post.author_id} />);
                    })}
                </div>
                <hr />
                <PostForm user={this.props.user} new_post_callback={this.addPost}/>
            </>
        );
    }

}


WhatsOn.propTypes = {
    user: PropTypes.object.isRequired
};

export default WhatsOn;
