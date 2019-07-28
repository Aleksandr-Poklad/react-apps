import * as React from "react";

interface PostProps {
    headerText: string;
    content: string;
}

const Post = (props: PostProps) => {
    return <div className={'post'} style={{backgroundColor: 'red'}}>
        <h2>{ props.headerText }</h2>
        <p>{ props.content }</p>
    </div>;
};

export {Post};