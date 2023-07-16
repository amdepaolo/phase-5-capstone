import React from "react";

function QuestionComments({comments}){

    const commentArr = comments.map(comment => <p>{comment.content}</p>)

    return(
        <div>
            {commentArr}
        </div>
    )
}

export default QuestionComments