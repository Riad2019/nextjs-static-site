import React from 'react'
import Link from "next/link"

export default function newslist({ newsLists }) {
    // Render data...
    return (
        <main>
            <div>

                {newsLists.map((news) => (
                    <div key={news.id}>

                        <h3>{news.title.substring(0, 20)}</h3>
                        <p>{news.body.substring(0, 100)}</p>
                        <Link className="btn btn-success" href={`/news/${news.id}`}>
                            Read More
                        </Link>

                    </div>

                ))}
            </div>




        </main>

    )
}

// This gets called on every request
export async function getStaticProps(context) {
    // Fetch data from external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newsLists = await res.json();
    console.log(newsLists)

    // Pass data to the page via props
    return {
        props: {
            newsLists
        }, // will be passed to the page component as props
    }
}