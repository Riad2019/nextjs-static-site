import React from 'react'

export default function newsdetails({ newsItem }) {

    // Render data...

    //   console.log(newsItem)
    return (
        <main>
            <div>


                <div key={newsItem.id}>
                    <h1>{newsItem.title}</h1>
                    <p>{newsItem.body}</p>
                </div>


            </div>

        </main>

    )
}





// export async function getStaticPaths() {

//     return {
//       paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//       fallback: false, // can also be true or 'blocking'
//     }
//   }


// `getStaticPaths` requires using `getStaticProps`
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newsLists = await res.json();
    const ids = newsLists.map((newsItem) => newsItem.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    // This gets called on every request

    // console.log(context.params.id)

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
    // Fetch data from external API
    const newsItem = await res.json();
    

    return {
        props: {
            newsItem
        }, // will be passed to the page component as props
    }
}
