"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, theme, Grid } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;

interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  agreement: boolean;
}

export default function AnimatedSignupForm() {
  const [show, setShow] = useState(false);
  const { token } = useToken();
  const screens = useBreakpoint();

  // "slide-down" animation effect on mount
  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const onFinish = (values: SignupFormValues) => {
    console.log("Received values of form: ", values);
  };

  const panelStyle: React.CSSProperties = {
    backgroundColor: token.colorBgContainer,
    borderRadius: screens.md ? token.borderRadiusLG : 0,
    boxShadow: screens.md ? token.boxShadowTertiary : "none",
    margin: "0 auto",
    padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
    width: "360px",
    // Animation styles
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-40px)",
    transition: "all 0.7s cubic-bezier(.77,0,.18,1)"
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
            Sign Up
          </Title>
          <Text type="secondary">Join us! Create an account to get started.</Text>
        </div>
        <Form
          name="signup"
          layout="vertical"
          requiredMark="optional"
          onFinish={onFinish}
          initialValues={{ agreement: false }}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", required: true, message: "Please input a valid email!" }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[{
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("You must agree to terms!"))
            }]}
          >
            <Checkbox>
              I have read and agree to the{" "}
              <Link href="#">Terms and Conditions</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
            <div style={{ marginTop: token.marginLG, textAlign: "center" }}>
              <Text type="secondary">Already have an account?</Text>{" "}
              <Link href="/login">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
