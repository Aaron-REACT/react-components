import React from 'react';
import faker from 'faker';


const CommentDetail = function(props){
    var imageURL = props.imageURL;
   /* alert(imageURL); */
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar_image" src={props.imageURL} /* style={{width: '100px', height: '100px'}} *//>
                </a>
                <div className="content" /* style={{display : 'inline-block'}} */>
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
    )
}

export default CommentDetail;
