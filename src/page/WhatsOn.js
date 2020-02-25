import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Card from "react-bootstrap/Card";

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
                    {this.props.desc}
                </Card.Text>
            </Card>
        );
    }


}

Post.propTypes = {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
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

            }


            this.setState({
                posts:
            })
        });
    }

}


WhatsOn.propTypes = {
    user: React.PropTypes.object.isRequired
};
