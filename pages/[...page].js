
import Head from 'next/head'

import {GET_PAGE, GET_PATHS } from "../queries/pages/get-page";
import client from "./api/client";
export async function getStaticPaths(){
  
    const res = await client.query({query:GET_PATHS});
    let menu = res.data?.pages?.nodes;
    let paths= menu.map(item=>{
        let path = item?.uri?.split('/').filter(pageUrl =>pageUrl);
        console.log(path);
        return { params:{page:path}}
    })
    return {paths,fallback:true}
}

export  async function getStaticProps(context){
    const res = await client.query({
        query:GET_PAGE,
        variables:{
            uri:context.params.page.join('/')
        }
    });
    let page = res?.data?.page;
    console.log(res);
    return{props:{page}}
}
const Page = ({page}) => {
    
console.log(page);
return ( 
    <>
    <Head>
        <title>{page.title}</title>
    </Head>
    <div className='mt-10'>
        {
            (page!==undefined) ? (
                <div>
                    <h1>{page.title}</h1>
                    <div dangerouslySetInnerHTML={{__html:page.content}} />
                </div>
            ) : <h1>Loading..</h1>
        }
    </div>
    </>
);
}
export default Page;