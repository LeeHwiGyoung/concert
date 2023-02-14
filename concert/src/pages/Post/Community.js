import Nav from '../../components/Nav';
import postDummyData from '../../assets/postdummy.json';
import './Community.css'
import { useEffect, useState } from 'react';
import PostListItem from './PostListItem';
import PostList from './PostList';

function Community(){
    const [post,setPost] = useState([]);
    
    useEffect( () => {
        const data = postDummyData;
        setPost(data);
    }, []);
    //"id":1,"member_id":1,"board_id":1,"post_title":"Bourne Ultimatum, The","post_content":"0.00","created_at":"2023-02
    //{post.map((item) => <PostListItem postId ={item.id} postTitle = {item.post_title} postContent = {item.post_content}/>)}
    return (
        <div className = "communityContainer">
            <div className = "communityContainers">
            {post.map((item) => <PostListItem postId ={item.id} postTitle = {item.post_title} postContent = {item.post_content}/>)}
            </div>
        </div>
    )
}

export default Community;