"use client"
import React from 'react'
import RootLayout from '@/component/RootLayout'
import Banner from '@/component/Ui/Banner'
import { Button, Col, Divider, Image, Row, Rate } from 'antd'
import { Card } from 'antd';
import Link from 'next/link';
import FooterPage from './footer/footer';
const { Meta } = Card;

const HomePage = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <Banner></Banner>
      <Divider style={{ fontSize: "40px", display: "flex", justifyItems: "center", justifyContent: "center" }} orientation="center">Featured Products</Divider>
      <div>
        <Row gutter={6} style={{ marginTop: '20px' }}>
          {posts?.map((alldata) => (
            <Col xs={24} sm={24} md={12} lg={8} key={alldata?.d} style={{ marginBottom: "20px" }}>
              {/* <Link href={`/productDetailsPage/${alldata?.featureProduct}`}> */}
              <Link href={`/featureProductDetailsPage/${alldata?.featureProduct}`}>
                <Card
                  title={''}
                  hoverable
                  cover={""}
                >
                  <Image alt="example" src={alldata?.featureimage} width={"100%"} height={300} />
                  <Meta title={alldata?.category} description={<><p>Category:{alldata?.featureProduct}</p><p>Price:{alldata?.price}</p><p>Status:{alldata?.status}</p></>} />
                  <Rate allowHalf defaultValue={alldata?.rating} />

                  {/* <Link href={`/productDetailsPage/${alldata?.featureProduct}`}><Button>Products Page</Button></Link> */}
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

      </div>
      <FooterPage />

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
  const res = await fetch(`${process.env.URL}/alldata`)
  const posts = await res.json()
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}