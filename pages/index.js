import { useState } from "react";
import Header from "../components/Header";

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = ["Alex", "John", "Andrew"];
  const posts = await res.json();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

function HomePage({posts}) {

  const [likes, setLikes] = useState(0);

  function handeClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header title="Home page!" />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handeClick}>Like {likes}</button>
    </>
  );
}

export default HomePage;
