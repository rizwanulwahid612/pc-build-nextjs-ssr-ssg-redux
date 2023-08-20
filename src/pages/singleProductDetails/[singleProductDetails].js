import React from 'react'
import { Button, Card, Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/component/RootLayout';
const { Meta } = Card;
const SingleProductDetailsPage = ({ data }) => {
    console.log(data)
    const { productName, image, status, price, description, avarageRating, individualRating, keyFeatures, review } = data
    //console.log(products)
    return (
        // <Row
        // // gutter={{
        // //     xs: 8,
        // //     sm: 16,
        // //     md: 24,
        // //     lg: 32,
        // // }}
        // >
        // <Col className="gutter-row" span={8}>

        // <Card
        //     hoverable
        //     style={{
        //         width: "full",
        //     }}
        // //cover={ }
        // >
        <div xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'space-between', gap: "50px", marginTop: '20px' }}>
            <img alt="example" src={image} width={370} height={200} />
            <Meta title={productName} description={<><p>description:{description}</p><p>Price:{price}</p><p>Status:{status}</p><p>Review:{review}</p></>} />
        </div>
        // </Card>
        // </Col>

        // </Row>
    )
}
SingleProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default SingleProductDetailsPage

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:5000/alldata")
//     const data = await res.json()

//     const paths = data.map((products) => ({
//         params: {
//             singleProductDetails: products.products
//         },
//     }))

//     return { paths, fallback: false }
// }
export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/getProductByName/${params.singleProductDetails}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
