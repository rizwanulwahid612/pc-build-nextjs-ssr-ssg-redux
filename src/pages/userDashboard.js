import React, { useState, useEffect } from 'react'
import RootLayout from '@/component/RootLayout'
import Banner from '@/component/Ui/Banner'
import { Button, Col, Divider, Image, Row } from 'antd'
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
            <Row
                gutter={[16, 16]}
                style={{
                    marginTop: "20px",
                    justifyContent: 'center'
                }}
            >
                {postdata?.map((alldata) => (
                    <Col key={alldata?.id} className="gutter-row" span={8} xs={24} sm={12} md={8} lg={6}>

                        <Card
                            hoverable
                            style={{
                                width: 300,
                            }}
                            cover={<Image alt="example" src={alldata?.image} width={300} height={200} />}
                        >
                            <Meta title={alldata?.featureProduct} description={<><p>Category:{alldata?.category}</p><p>Price:{alldata?.price}</p><p>Status:{alldata?.status}</p><p>Rating:{alldata?.rating}</p></>} />
                            <Link href={`/productDetailsPage/${alldata?.featureProduct}`}><Button>Products Page</Button></Link>
                        </Card>
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
    const res = await fetch('http://localhost:5000/getUserPostData')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}