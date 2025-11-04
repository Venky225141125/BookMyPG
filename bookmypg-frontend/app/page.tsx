"use client";

import { Layout, Typography, Card, Row, Col, Button } from 'antd';
import { HomeOutlined, SearchOutlined, DollarOutlined, StarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import AppHeader from '@/components/layout/Header';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content style={{ marginTop: 64 }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '80px 50px',
          background: 'linear-gradient(135deg, #1677ff 0%, #4096ff 100%)',
          textAlign: 'center',
          color: 'white'
        }}>
          <Title style={{ color: 'white' }}>Find & Book PGs Near You</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 800, margin: '0 auto' }}>
            Search, compare and book paying guest accommodations with transparent pricing and verified listings.
          </Paragraph>
          <div style={{ marginTop: 24 }}>
            <Button type="primary" size="large" style={{ marginRight: 12 }}>Search PGs</Button>
            <Button type="default" size="large">List Your PG</Button>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '40px 50px' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={6}>
              <Card>
                <HomeOutlined style={{ fontSize: 28, color: '#1677ff' }} />
                <Title level={4}>Verified Listings</Title>
                <Paragraph>Only verified PGs with clear photos and pricing.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card>
                <SearchOutlined style={{ fontSize: 28, color: '#1677ff' }} />
                <Title level={4}>Smart Search</Title>
                <Paragraph>Filter by location, price, amenities and more.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card>
                <DollarOutlined style={{ fontSize: 28, color: '#1677ff' }} />
                <Title level={4}>Transparent Pricing</Title>
                <Paragraph>No hidden fees — know the cost upfront.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card>
                <StarOutlined style={{ fontSize: 28, color: '#1677ff' }} />
                <Title level={4}>Trusted Hosts</Title>
                <Paragraph>Ratings and reviews from verified guests.</Paragraph>
              </Card>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  );
}
