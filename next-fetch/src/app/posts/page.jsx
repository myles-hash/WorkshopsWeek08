import Link from "next/link";


export default async function PostListPage({ searchParams }) {
    console.log("searchParams", searchParams);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
  
    if (searchParams.sort === "desc") {
      posts.reverse();
    }

    if (searchParams.num == "ten" || searchParams.num && searchParams.sort === "asc") {
        posts = posts.slice(0, 10);
    }

    if (searchParams.num && searchParams.sort === "desc") {
        posts = posts.slice(0, 10).reverse();
    }

    
    return (
      <div>
        <h2>Post List</h2>
        <Link href="/posts?sort=asc">All</Link> - <Link href="/posts?sort=asc">Sort ascending</Link> - <Link href="/posts?sort=desc">
          Sort descending
        </Link>
        <br></br>
        <Link href="/posts?num=ten">First 10 Posts</Link> | <Link href="/posts?num=ten&sort=asc">Sort ascending</Link> | <Link href="/posts?num=ten&sort=desc">Sort descending</Link>
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

