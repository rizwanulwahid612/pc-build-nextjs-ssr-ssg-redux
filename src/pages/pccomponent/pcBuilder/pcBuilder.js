
import React, { useState } from 'react';
import { Button, Card, FloatButton, Space, Table, Tag, Avatar, Badge, message } from 'antd';
import RootLayout from '@/component/RootLayout';
import Link from 'next/link';
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useGetProductByIdQuery } from '@/redux/api/api';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearCart, removeFromCart } from '@/redux/features/productSlice';
import styles from '@/styles/PcBuilder.module.css';
import { useSession } from 'next-auth/react';
const { Column, ColumnGroup } = Table;


const CustomBadge = ({ count }) => (
    <Space style={{ marginTop: '7px' }} size="large">
        <Badge count={count}>
            <Avatar shape="square" size="small" />
        </Badge>
    </Space>
);
const CustomCardExtra = ({ featureProduct }) => (
    <Link href={`/productDetailsPage/${featureProduct}`}>
        <Button type="primary">Choose</Button>
    </Link>
);



const PcBuilder = ({ posts }) => {
    console.log(posts)

    const { data: session } = useSession()

    const { products } = useAppSelector((state) => state.product)



    console.log(products)
    const [expandedRowKey, setExpandedRowKey] = useState(null);

    const handleRowExpand = (key) => {
        if (expandedRowKey === key) {
            setExpandedRowKey(null); // Collapse if already expanded
        } else {
            setExpandedRowKey(key); // Expand the clicked row
        }
    };

    const postsWithMatchingProducts = posts?.map((post) => {

        const matchingProducts = products.filter((product) => product.id === post.id);

        return {
            key: post.id, // Add unique key to each row
            featureProduct: post.featureProduct,
            featureimage: post.featureimage,
            category: post.category,
            status: post.status,
            price: post.price,
            products: matchingProducts,
        };
    });
    console.log(postsWithMatchingProducts)
    const isBuildCompleteDisabled = postsWithMatchingProducts?.some(post => post?.products?.length === 0);
    const dispatch = useAppDispatch()

    //  const dataStore = postsWithMatchingProducts.filter(datast => datast)
    const handleCompleteBuild = async () => {
        console.log("postsWithMatchingProducts:", products);
        const requestData = {
            email: session?.user?.email,
            data: products,
        };
        const response = await fetch('http://localhost:5000/storeData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData), // Assuming this is the array you want to store
        });

        if (response.ok) {
            // message.success('Product added Successfully');
            message.success('complect build successfull')
            dispatch(clearCart(products))
            console.log(products)
            //toast.success('This is a success message');
            const responseData = await response.json();
            //console.log(responseData);

        } else {
            console.error('Failed to store data:', response.statusText);
        }

    };

    // ...



    const columns = [
        {
            title: 'Name',
            dataIndex: 'featureProduct',
            key: 'featureProduct',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },

        {
            title: 'Chose Quantity',
            dataIndex: '',
            key: 'choseQuantity',
            render: (_, record) => (
                <CustomBadge count={record?.products?.length} />
            ),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: (_, record) => (
                <CustomCardExtra featureProduct={record?.featureProduct} />
            ),
        },
    ];
    console.log(posts)

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table className={styles.ant_table}
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <Card className={styles.ant_card} style={{ width: '100%' }}>
                            <Space size="large">
                                <div className="pc-builder-footer">
                                    {record?.products?.map((prod) => (
                                        <div key={prod?.productName}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                <div key={prod?.productName}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Card hoverable style={{ width: "180vh" }}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '60px' }}>
                                                                <img alt="example" src={prod?.image} width={60} />
                                                                <p>Description:{prod?.description}</p>
                                                                <div>Name: {prod?.productName}</div>
                                                                <div>Price: {prod?.price}</div>
                                                            </div>
                                                        </Card>
                                                        <div>
                                                            <Button onClick={() => dispatch(removeFromCart(prod))} type="primary" danger shape="circle" ><CloseCircleOutlined /></Button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Space>
                        </Card>
                    ),
                    expandedRowKeys: [expandedRowKey], // Pass the currently expanded row key
                    onExpand: (expanded, record) => {
                        if (expanded) {
                            handleRowExpand(record.key); // Expand the clicked row
                        } else {
                            handleRowExpand(null); // Collapse the row
                        }
                    },
                }}
                dataSource={postsWithMatchingProducts}
            />
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Link href='/'><Button onClick={() => handleCompleteBuild()} type="primary" danger disabled={isBuildCompleteDisabled} >Complete Build</Button> </Link>

            </div>
        </div>
    );

}
//export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default PcBuilder

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/alldata');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}
// export async function getStaticProps() {
//     const res = await fetch('http://localhost:5000/alldata')
//     const posts = await res.json()

//     return {
//         props: {
//             posts,
//         },
//     }
// }





