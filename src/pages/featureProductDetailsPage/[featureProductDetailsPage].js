import React, { useState } from 'react'
import { Button, Card, Col, Row, Space, Rate, message } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/component/RootLayout';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/productSlice';
import stylec from '../../pages/singleProductDetails/singleProductDetails.module.css'
const { Meta } = Card;
const FeatureProductDetailsPage = ({ data }) => {

    console.log(data)

    const { data: session } = useSession()
    const { products } = data;
    console.log(products)

    const dispatch = useAppDispatch()
    const handleProductClick = (product) => {
        dispatch(addToCart(product));

    };
    // console.log(selectedProduct)


    return (
        <Link href={`/productDetailsPage/${data?.featureProduct}`}>
            <Row gutter={6} style={{ margin: '20px' }}>

                <div className={stylec.container}>
                    <img alt="example" src={data?.featureimage} width={"100%"} height={500} />

                    <Meta title={data?.featureProduct} description={
                        <>
                            <h1>{data?.featureProduct}</h1>
                            <h2> {data?.category}</h2>
                            <h1>Price: {data?.price}</h1>
                            <h2>Status: {data?.status}</h2>
                            <Rate allowHalf defaultValue={data?.rating} />

                        </>
                    } />

                </div>

            </Row>
        </Link>
        // <div>
        //     <Row gutter={6} style={{ marginTop: '20px' }}>
        //         {/* {products?.map((alldata) => ( */}
        //         <Col xs={24} sm={24} md={12} lg={8} key={data?.d} style={{ marginBottom: "20px" }}>
        //             {/* <Link href={`/singleProductDetails/${alldata?.productName}`}> */}
        //             <Card
        //                 title={''}
        //                 hoverable
        //                 cover={<img alt="example" src={data?.featureimage} width={370} height={200} />}
        //             >

        //                 <Meta title={data?.featureProduct} description={<><p>Category:{data?.category}</p><p>Price:{data?.price}</p><p>Status:{data?.status}</p></>} />

        //                 <Rate allowHalf defaultValue={data?.rating} />


        //                 {/* <Link href={`/productDetailsPage/${alldata?.featureProduct}`}><Button>Products Page</Button></Link> */}
        //             </Card>
        //             {/* </Link> */}

        //         </Col>
        //         {/* // ))} */}
        //     </Row>
        // </div>

    )
}

FeatureProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default FeatureProductDetailsPage

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/alldata")
    const data = await res.json()

    const paths = data.map((products) => ({
        params: {
            featureProductDetailsPage: products.featureProduct
        },
    }))

    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/alldata/${params.featureProductDetailsPage}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
