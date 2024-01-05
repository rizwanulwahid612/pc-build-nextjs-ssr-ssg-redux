import React, { useState, useEffect } from 'react'
import RootLayout from '@/component/RootLayout'
import Banner from '@/component/Ui/Banner'
import { Button, Col, Divider, Image, Row, Rate } from 'antd'
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;


const UserDashboard = ({ posts }) => {

    const [postdata, setPostData] = useState([]);

    useEffect(() => {
        // useEffect use na korle re render data hoye jabe thetmeans get errors. [{[{},{},...]}]
        const processedData = posts?.map((object) => {
            const postdata = object?.data;
            const filteredData = postdata.filter(dat => dat);
            setPostData(filteredData)
        });

    }, [posts]);
    console.log(postdata);


    return (
        <div>
            <Row gutter={6} style={{ marginTop: '20px' }}>
                {postdata?.map((alldata) => (
                    <Col xs={24} sm={24} md={12} lg={8} key={alldata?.d} style={{ marginBottom: "20px" }}>
                        <Link href={`/singleProductDetails/${alldata?.productName}`}>
                            <Card
                                title={''}
                                hoverable
                                cover={""}
                            >
                                <Image alt="example" src={alldata?.image} width={"100%"} height={300} />
                                <Meta title={alldata?.featureProduct} description={<><p>Product Name:{alldata?.productName}</p><p>Price:{alldata?.price}</p><p>Status:{alldata?.status}</p></>} />
                                <Rate allowHalf defaultValue={alldata?.avarageRating} />
                                {/* <p>Avarage Rating:{alldata?.avarageRating}</p> */}


                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

UserDashboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default UserDashboard

// This function gets called at build time
export async function getStaticProps() {
    const res = await fetch(`${process.env.URL}/getUserPostData`)
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}