import React from 'react';
import { GithubOutlined, GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import RootLayout from '@/component/RootLayout';
import { signIn } from 'next-auth/react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '@/firebase/firebase.auth';


//const auth = getAuth(app);

const Login = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    console.log(user)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        createUserWithEmailAndPassword(values.email, values.password)
    };
    return (
        <div>
            <h1>LogIn</h1>
            <Form style={{
                maxWidth: 600,
            }}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    label="EmailAdd"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/register/register">register now!</a>
                </Form.Item>
            </Form>
            <div style={{ display: "flex" }}>
                <div>
                    <Button><a><GoogleOutlined onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })} /></a></Button>
                </div>
                <div style={{ display: "flex", marginLeft: "40px" }}>
                    <Button><a><GithubOutlined onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/" })} /> </a></Button>
                </div>
            </div>
        </div>
    );
};
Login.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default Login;

