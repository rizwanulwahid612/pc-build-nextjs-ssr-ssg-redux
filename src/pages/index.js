import React from 'react'
import RootLayout from '@/component/RootLayout'
import Banner from '@/component/Ui/Banner'
import { Button, Col, Divider, Image, Row } from 'antd'
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;


const HomePage = ({ posts }) => {
  //console.log(posts)
  return (
    <div>
      <Banner></Banner>
      <Divider orientation="left">Featured Products</Divider>
      <Row
        gutter={[16, 16]}
        style={{
          marginTop: "20px",
          justifyContent: 'center'
        }}
      >
        {posts?.map((alldata) => (
          <Col key={alldata?._id} className="gutter-row" span={8} xs={24} sm={12} md={8} lg={6}>

            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={<Image alt="example" src={alldata?.featureimage} width={300} height={200} />}
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

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export default HomePage

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/alldata')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}