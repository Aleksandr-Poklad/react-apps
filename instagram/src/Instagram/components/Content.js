import React from 'react';
import avatar from "../assets/images/nasa.jpg";
import images from "../assets/data/images.json";


export const Content = () => {
    const  imagesJSX = images.map((image) => {
        return (
            <div key={image.id} className='image'>
                <img src={image.src} alt="instaphoto"/>
            </div>
        )
    });

    return (
        <div className="content">
            <div className="profile">
                <img src={avatar} className='avatar' alt="avatar"/>
                <div className="main">
                    <span className='nickname'>nasa</span>
                    <div className="stats">
                        <div>
                            <span>2.436 </span>
                            posts
                        </div>
                        <div>
                            <span>34.9m </span>
                            followers
                        </div>
                        <div>
                            <span>70 </span>
                            following
                        </div>
                    </div>
                    <span className='name'>NASA</span>
                </div>
            </div>
            <div className="images">
                {imagesJSX}
            </div>
        </div>
    );
};
