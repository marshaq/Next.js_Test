import React from 'react'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router';
// import Layout/ from '../components/Layout'

const DetailsPage : React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
//   <Layout title="Home | Next.js + TypeScript Example">
return(
<>
    <h1>Welcome to {id} University!</h1>

<Typography>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Typography>

    
</>

)
//   </Layout>
}

export default DetailsPage
