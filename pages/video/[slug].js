import {gql, GraphQLClient} from 'graphql-request'

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url,{
        headers: {
            "Authorization": process.env.GRAPH_CMS_TOKEN
        }
    })
    const pageSlug = pageContext.query.slug
}
const Video = () => {
    return (
        <div></div>
    )
}

export default Video