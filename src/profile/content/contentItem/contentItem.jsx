import React, {Fragment} from 'react';

const ContentItem = ({content}) => {
    return (
        <Fragment>
            <ul>           
                <div>{content.text}</div>
                <div>like - {content.likeCount}</div>
            </ul>
        </Fragment>

    )
}

export default ContentItem;