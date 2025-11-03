"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, theme, Grid } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const { token } = useToken();
  const screens = useBreakpoint();

  // "slide-up" animation effect on mount
  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const onFinish = (values: LoginFormValues) => {
    console.log("Login values:", values);
  };

  const panelStyle: React.CSSProperties = {
    backgroundColor: token.colorBgContainer,
    borderRadius: screens.md ? token.borderRadiusLG : 0,
    boxShadow: screens.md ? token.boxShadowTertiary : "none",
    margin: "0 auto",
    padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
    width: "360px",
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s cubic-bezier(.77,0,.18,1)"
  };

  return (
    <section
      style={{
        alignItems: "center",
        backgroundColor: screens.md ? token.colorBgLayout : token.colorBgContainer,
        display: "flex",
        height: screens.md ? "100vh" : "auto",
        padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
      }}
    >
      <div style={panelStyle}>
        <div style={{ marginBottom: token.marginXL, textAlign: "center" }}>
          <Title style={{ fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3 }}>
            Sign In
          </Title>
          <Text type="secondary">Welcome back — sign in to continue.</Text>
        </div>
        <Form
          name="login"
          layout="vertical"
          requiredMark="optional"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", required: true, message: "Please input a valid email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign In
            </Button>
            <div style={{ marginTop: token.marginLG, textAlign: "center" }}>
              <Text type="secondary">Don’t have an account?</Text>{" "}
              <Link href="/signup">Sign up</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
