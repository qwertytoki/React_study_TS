import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const Blogs = ({ data }) => {
  if (data.length === 0) {
    return <Error message="Could not load blogs, Please try later" />;
  }
  return (
    <Layout
      mainTitle="Our Recent Blogs"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Blogs page</title>
      </Head>

      <h2>Blogs</h2>

      <hr />

      {data.map((b, i) => (
        <Link as={`/blog/${b.id}`} href={`/blog/?id=${b.id}`} key={i}>
          <h4>{b.title}</h4>
        </Link>
      ))}
    </Layout>
  );
};

Blogs.getInitialProps = async () => {
  // concurrent call
  let data;
  Promise.all([
    fetch("https://api.github.com/users/iliakan"),
    fetch("https://api.github.com/users/taylorotwell"),
  ])
    .then(async ([res1, res2]) => {
      const a = await res1.json();
      const b = await res2.json();
      console.log(
        a.login + " has " + a.public_repos + " public repos on GitHub"
      );
      console.log(
        b.login + " has " + b.public_repos + " public repos on GitHub"
      );
    })
    .catch((error) => {
      console.log(error);
    });

  // interceptor
  var args = arguments;
  fetch = ((originalFetch) => {
    return (...args) => {
      const result = originalFetch.apply(this, args);
      return result.then(console.log("Request was sent"));
    };
  })(fetch);

  fetch("https://api.github.com/users/qwertytoki")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  try {
    Promise.all;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    console.log("Number of blogs: ", data.length);
  } catch (err) {
    console.log("ERROR", err);
    data = [];
  }
  return {
    data,
  };
};

export default Blogs;
