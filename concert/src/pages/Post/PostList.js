import { useEffect } from 'react'
import './PostList.css'
import { Link } from 'react-router-dom'
function PostList({data}) {
    //{post.map((item) => <PostListItem postId ={item.id} postTitle = {item.post_title} postContent = {item.post_content}/>)}
    const makeChild = () => {
       return  data.map((item,idx)=>         
            <div key = {item.id} className={ (idx % 2 === 0) ? 'postBox' : 'postBox1'} onClick = {readPost}>
                <p className = "postTitle">{item.post_title}</p>
                <p className = "postContent">{cutContent(item.post_content)}</p>
            </div>
            
        )
    }

    const cutContent = (content) => {
        if(content !== null && content.length > 250){
            const cuttedContent = content.substring(0,250) + "...";
            return cuttedContent;
        }
        return content;
    }

    const readPost = () => {
        <Link to >

        </Link>
    }


    useEffect( () => {
        
    }, [])

    
    return (
        <div className = "postContainer">
           {makeChild()}
        </div>
    )
}

export default PostList;