import {gql, GraphQLClient} from 'graphql-request'

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug

    console.log(pageSlug)
}
const Video = () => {
    return (
        <div></div>
    )
}

export default Video