export default async function Post({ params }){
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}` 
      );
      const post = await response.json(); 
    
    return(
        <div>
            <h1>Post {post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </div>
    )
}