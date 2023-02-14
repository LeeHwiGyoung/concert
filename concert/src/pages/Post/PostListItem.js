function PostListItem({postId, postTitle , postContent}) {
    return (
        <>
            <li>
                { ` postId = ${postId} postTitle = ${postTitle} postContent = ${postContent}`}
            </li>
        </>
    )
}

export default PostListItem;