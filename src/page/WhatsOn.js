import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'
import './post.css';
import {PostForm} from "./MakeAPost";
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

        this.state = {
            likes: 0,
            dislikes: 0,
        }
    }

    render() {
        return (

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
        );
    }


}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

class WhatsOn extends MainPage {

    // This will have to be more complex as it fetches results from the backend
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
        const func =  (data) => {

            const posts = [];
            for (let i = 0; i < data.length; i++) {
                const post = data[i];
                posts.push(<Post title={post.title} content={post.content} author={post.author_name} />);
            }

            this.setState({
                posts: posts
            })
        };
        const fun = (xhr, worthless, err) => {
            console.log("Failed to fetch post data!: "+err)
        };
        getPosts(props.user, 10,func, fun )

    }

    render() {
        return (
            <>
                {this.state.posts}
                <hr />
                <PostForm />
            </>
        );
    }

}


WhatsOn.propTypes = {
    user: PropTypes.object.isRequired
};

export default WhatsOn;
