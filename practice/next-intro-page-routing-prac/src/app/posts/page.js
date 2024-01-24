import Link from "next/link";

export default async function PostsPage({ searchParams }){
    console.log("searchParams", searchParams);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    if (searchParams.sort === "desc") {
        posts.reverse();
      }

      return (
        <div>
          <h2>Post List</h2>
          <Link href="/posts?sort=asc">Sort ascending</Link> - <Link href="/posts?sort=desc">
            Sort descending
          </Link>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href={`/post/${post.id}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
}