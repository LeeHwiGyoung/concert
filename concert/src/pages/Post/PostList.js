import { useEffect } from 'react'
import './PostList.css'
function PostList({data}) {
    //{post.map((item) => <PostListItem postId ={item.id} postTitle = {item.post_title} postContent = {item.post_content}/>)}
    const makeChild = () => {
        data.map(item=> (
            <tr>
                <td>{item.id}</td>
                <td>{item.post_title}</td>
            </tr>
        ))
    }
    useEffect( () => {

    })

    
    return (
        <>
            <table className = "postTable">
                <th className= "postNumber"> No. </th>
                <th className= "postTitle"> 제목 </th>
                {makeChild()}
            </table>
        </>
    )
}

export default PostList;