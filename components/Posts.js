import React from 'react'
import Post from './Post'

const Posts = () => {

    const posts = [
        {
            id: '1',
            username: 'sujit mishra',
            userImg: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1677396390094-3ccfe333a729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
            caption: "nice post"
        },
        {
            id: '2',
            username: 'sujit mishra',
            userImg: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1677396390094-3ccfe333a729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
            caption: "nice post"
        },
        {
            id: '3',
            username: 'sujit mishra',
            userImg: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1675589577750-2feaa8a32047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            caption: "nice post"
        },
        {
            id: '4',
            username: 'sujit mishra',
            userImg: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1675589577750-2feaa8a32047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            caption: "nice post"
        }
    ]
  return (
    <div>
        {posts.map(post => (
            <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts