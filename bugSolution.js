```javascript
// pages/about.js
import useSWR from 'swr';

function About({initialData}) {
  const {data, error} = useSWR('/api/data', () => fetch('/api/data').then(res => res.json()), {initialData});

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      initialData: data,
    },
  };
}

export default About;
```