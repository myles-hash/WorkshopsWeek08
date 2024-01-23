export const metadata = {
    title: "Posts | Next.js",
    description: "A simple blog built with Next.js",
  };


export default async function Posts() {
    const response = await fetch("https://jsonplaceholder.org/posts");
    const posts = await response.json();

    return (<div>
        <h2>Posts</h2>
        <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
    )
}