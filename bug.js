```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error if the user navigates directly to /about
  // before the data is fetched in the getServerSideProps function.
  const {data} = useSWR('/api/data');

  return (
    <div>
      <h1>About Page</h1>
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default About;
```