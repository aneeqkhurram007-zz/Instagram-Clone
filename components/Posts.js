import Post from "./Post"
const posts = [{
    postid: '123',
    username: 'aneeqkhurram007',
    userImg: 'https://links.papareact.com/jjm',
    img: 'https://links.papareact.com/jjm',
    caption: 'Lessss Go'
}, {
    postid: '123',
    username: 'aneeqkhurram007',
    userImg: 'https://links.papareact.com/jjm',
    img: 'https://links.papareact.com/jjm',
    caption: 'Lessss Go'
}, {
    postid: '123',
    username: 'aneeqkhurram007',
    userImg: 'https://links.papareact.com/jjm',
    img: 'https://links.papareact.com/jjm',
    caption: 'Lessss Go'
}]
const Posts = () => {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.postid} {...post}
                />
            ))}
        </div>
    )
}

export default Posts
