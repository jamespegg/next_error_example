import React from 'react'

const Page = props => (
  <div>Hello</div>
)

export async function getStaticProps ({ params, preview = false, previewData }) {
  return {
    props: {
      preview
    },
  }
}

export async function getStaticPaths () {

  return {
    paths: [
      { params: 
        {
          page : ["hello"]
        }
      }
    ],
    fallback: true
  }
}

export default Page
