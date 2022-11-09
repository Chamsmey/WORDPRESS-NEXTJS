import Head from 'next/head'

import Link from 'next/link';
import { gql } from '@apollo/client';
import client from './api/client';


export async function getStaticProps(
) {
 
  /// past the query to the url  to request data 
  // there are two funcntionalities :
  // query  : request dada or get data
  // muntation : post data 
  //
  const WPQL_REQUEST_URL ={query:gql`
  query allPosts {
    posts{
      nodes{
        id
        slug
        title
      }
    }
  }
  `};
  /// fetch data fro mwordpress 
 const {data}= await client.query(WPQL_REQUEST_URL);
 
 let dataQuery = data.posts.nodes;
  // console.log(dataQuery);
  return {props:{dataQuery,revalidate:1}}
}

// html functionality
function createMarkup(dom) {
  return {__html: dom};
}

export default function Home(props) {
  console.log(process.env.NEXT_PUBLIC_API);
  let posts = props.dataQuery;
  return (
    <div className='w-full h-full m-auto'>
      <Head>
        <title>home pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='w-ful m-auto p-2'>
        <h1 className='text-2xl text-blue-400'>
        Home page

        </h1>
      </header>
      <main className='w-full m-auto p-2'>
        <ul className=''>
          {
            posts.map(post=>{
              return <li key={post.id} className='hover:text-green-400 underline'><Link href={'/post/'+post.slug}>{post.title}</Link></li>
            })
          }

        </ul>

      </main>
    </div>
  )
}
