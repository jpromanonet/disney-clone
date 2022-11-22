import {gql, GraphQLClient } from "graphql-request"

export const getStaticProps = async () => {
    const url = "https://api-eu-central-1.hygraph.com/v2/cktrz7mot2od601yzhg4lgwex/master"
    const GraphQLClient = new GraphQLClient(url, {
        header: {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjkwODMzODgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2t0cno3bW90Mm9kNjAxeXpoZzRsZ3dleC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDE4YjU0MGItNDliZi00MjhjLWI1YTktN2ZkMjBlMDdhODI1IiwianRpIjoiY2xhcmw1bDI3N2NlbTAxdGNhamU5N3hxNyJ9.r6ViNrE_fPjsuNq6ZtZkO1lujFa2TBk8Go5aj4Y_nYI7VbwKj6zwFuFdiLtdLwIaOo5rKDkNf3WmeKeWHEZrgtuV2NvXAXJmucJ_QQV5OPmyiYrzF4J-B-o6MQJFG_DOG1EG_0XdtDfeaTfYY4JVCQXfh9QQN1nFHhbmoSUmiZv1CVkRQ7cEmvGROMzgZ4XL5S_gaxXL8fVrU_5CjYAtVNq5z8NDBeb-pyK2T9CjtVkKM2MU5da5M5IhiiYZrsXBk0OpvG0pee-DdBAZHTwGwyQ-XHOcHf1zjTAXNQPsHRhWNd4AtiHQshyCGQnCKkkvMfcYCmI2bv2Ryi_fRWpsGvsasIDR4trodkxMOHZxZ_xzmybSSPK0BGz7bowJ-tYpEhjN2fmE39Pbe2ZgA_JKaY6YffLdmJHB8STVoDeXvySq0gNj7jPbkig2ph_yGqGQojykqHR4w7Xz6_pA21rUtrZaZtmanHZY5BT1Ze1U5hzmmTieyeg5LMIavzOJGw5IkK3wsKUe_5fouP-hvAmwfAs3eoGldAYUHHNqNdGMFjhbFt44akti_CyckyNjl7GVOTDEZb4v99tzdOSk5C2WKvm8R7TF3ABTB_tY_-83XjXhI_Eq-bRCegetL5soea4jhW39SQYQalt6IV_v7YfHUXP4Z1lQjsaJzIl68RhTU2M"
        }
    })
}

export default function Home() {
  return (
    <div>
      Hello!
    </div>
  )
}

export default Home
