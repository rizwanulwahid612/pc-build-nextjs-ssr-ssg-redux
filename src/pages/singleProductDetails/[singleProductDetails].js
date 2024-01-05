import React from 'react';
import { Button, Card, Col, Row, Rate } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/component/RootLayout';
const { Meta } = Card;
import stylecom from './singleProductDetails.module.css'
const SingleProductDetailsPage = ({ data }) => {
    console.log(data);
    const { productName, image, status, price, description, averageRating, individualRating, keyFeatures, review } = data;

    return (
        <Row gutter={6} style={{ margin: '20px' }}>
            <div className={stylecom.container}>
                <img alt="example" src={image} width={"100%"} height={500} />

                <Meta title={productName} description={
                    <>
                        <h1>{productName}</h1>
                        <h3> {description}</h3>
                        <h1>Price: {price}</h1>
                        <h2>Status: {status}</h2>
                        <h3>key Features:</h3>
                        <p>Brand: {keyFeatures.brand}</p>
                        <p>Model: {keyFeatures.model}</p>
                        <p>Port: {keyFeatures.port}</p>
                        <p>Type: {keyFeatures.type}</p>
                        <p>Voltage: {keyFeatures.voltage}</p>
                        <h2>Average Rating:</h2><Rate allowHalf defaultValue={averageRating} />
                        <h2>Individual Rating:</h2><Rate allowHalf defaultValue={individualRating} />
                        <h3>Review: {review}</h3>
                    </>
                } />
            </div>
        </Row>
    );
};

SingleProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
};

export default SingleProductDetailsPage;

export async function getStaticPaths() {

    const res = await fetch(`${process.env.URL}/allProducts`);
    const products = await res.json();

    const paths = products.map((product) => ({
        params: { singleProductDetails: product?.productName }, // Adjust this according to your API data structure
    }));

    return { paths, fallback: false }; // fallback: false means that pages that don't have pre-generated static versions will result in a 404 page
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`${process.env.URL}/allProducts/${params?.singleProductDetails}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}












// import React from 'react'
// import { Button, Card, Col, Row } from 'antd';
// import Link from 'next/link';
// import Image from 'next/image';
// import RootLayout from '@/component/RootLayout';
// const { Meta } = Card;
// const SingleProductDetailsPage = ({ data }) => {
//     console.log(data)
//     const { id, productName, image, status, price, description, avarageRating, individualRating, keyFeatures, review } = data

//     return (

//         <div xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'space-between', gap: "50px", marginTop: '20px' }}>
//             <img alt="example" src={image} width={370} height={200} />
//             <Meta title={productName} description={<><p>description:{description}</p><p>Price:{price}</p><p>Status:{status}</p><p>Review:{review}</p></>} />
//         </div>

//     )
// }
// SingleProductDetailsPage.getLayout = function getLayout(page) {
//     return (
//         <RootLayout>
//             {page}
//         </RootLayout>
//     )
// }
// export default SingleProductDetailsPage

// export const getServerSideProps = async (context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:5000/getProductByName/${params.singleProductDetails}`);
//     const data = await res.json();
//     return {
//         props: {
//             data,
//         }
//     }
// }
