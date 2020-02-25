import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'

// Fetches posts asyncthorusly from the backend
function getPosts(user, num, successCallback, errorCallback) {

    $.ajax({
        url: "localhost:8000/api/posting/get/"+num,
        crossdomain: true,
        header: user.getAuthHeader(),
        success: successCallback,
        error: errorCallback,
        datatype: 'json',
    })

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
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.author}</Card.Subtitle>
                </Card.Body>
                <Card.Text>
                    {this.props.content}
                </Card.Text>
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

        getPosts(props.user, 10, (data) => {

            var posts = [];

            for (const post in data) {
                posts += <Post title={post.title} content={post.content} author={post.author_name} />
            }

            this.setState({
                posts: posts
            })
        }, (xhr, worthless, err) => {
            console.log("Failed to fetch post data!: "+err)
        });
    }

    render() {
        return (
            <>
                <li>
                    {this.state.posts}
                </li>
            </>
        );
    }

}


WhatsOn.propTypes = {
    user: PropTypes.object.isRequired
};

export default WhatsOn;
