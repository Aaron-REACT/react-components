import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = function(){
        return (
        <div className="ui_container_comments">

            <CommentDetail author="Sam" timeAgo="Today at 4:57PM" comment="Awesome post!" imageURL="eg5.jpg"/>
            <CommentDetail author="Bev" timeAgo="Today at 3:57PM" comment="terrific post!" imageURL={faker.image.avatar()}/>
            <CommentDetail author="Rip" timeAgo="Today at 2:44PM" comment="good post!" imageURL={faker.image.avatar()}/>  
            
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar_image" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Jim
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00pm</span>
                    </div>
                    <div className="text">Great post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

/* http://semantic-ui.com/ */