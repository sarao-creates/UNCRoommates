import { useState, useEffect } from 'react';
import Post from '../Post';
import {db} from '../Firebase/firebase';
import './index.css';

function Feed() {

    const [initialPosts, setInitialPosts] = useState([])

    const getRecentPosts = async () => {
        setInitialPosts([]);
        let initialPostObjects = [];
        await db.collection('posts').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                initialPostObjects.unshift(doc.data());
            });
        });
        let posts = []
        if (initialPostObjects.length < 30) {
            for (let i = 0; i < initialPostObjects.length; i++) {
                posts.unshift(<Post key={i} postObj={initialPostObjects[i]} />)
            }
        }

        else {
            for (let i = 0; i < 30; i++) {
                posts.unshift(<Post key={i} postObj={initialPostObjects[i]} />)
            }
        }

        setInitialPosts(posts);
    }

    useEffect(() => {
        getRecentPosts();
    }, []);

    return(
        <div className='feed-main'>
            {initialPosts}
        </div>
        
    );
}

export default Feed;