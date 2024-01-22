export default function PostsPage({ params }){
    console.log(params)
    return(
        <>
        <h1>This is page Number:{params.id}</h1>
        </>
    )
}