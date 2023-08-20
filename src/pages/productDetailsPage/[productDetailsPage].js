import React, { useState } from 'react'
import { Button, Card, Col, Row, Space } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/component/RootLayout';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/productSlice';
const { Meta } = Card;
const ProductDetailsPage = ({ data }) => {
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
        <Row
            gutter={[16, 16]}
            style={{
                //width: 370,
                marginTop: "20px",
                justifyContent: 'center'
            }}
        // gutter={{
        //     xs: 8,
        //     sm: 16,
        //     md: 24,
        //     lg: 32,
        // }}
        >
            {products?.map((alldata) => (
                <Col key={alldata?.productName} xs={24} sm={12} md={8} lg={6} >

                    <Card
                        hoverable
                        style={{
                            //width: 370,
                            marginTop: "20px",
                            justifyContent: 'space-between'
                        }}
                        cover={<img alt="example" src={alldata?.image} width={370} height={200} />}
                    >
                        <Meta title={alldata?.productName} description={<><p>description:{alldata?.description}</p><p>Price:{alldata?.price}</p><p>Status:{alldata?.status}</p><p>Rating:{alldata?.rating}</p></>} />
                        {session?.user?.email ?
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Link href={`/singleProductDetails/${alldata?.productName}`}><Button>Product Details</Button></Link>
                                <Button onClick={() => handleProductClick(alldata)} type='primary'>Add</Button>
                                {/* <Button onClick={() => ''} type='primary'>Add</Button> */}
                            </div>
                            :
                            <div>
                                <Link href={`/singleProductDetails/${alldata?.productName}`}><Button>Product Details</Button></Link>
                            </div>

                        }

                    </Card>

                </Col>
            ))}
        </Row>
    )
}

ProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default ProductDetailsPage

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/alldata")
    const data = await res.json()

    const paths = data.map((products) => ({
        params: {
            productDetailsPage: products.featureProduct
        },
    }))

    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/alldata/${params.productDetailsPage}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
