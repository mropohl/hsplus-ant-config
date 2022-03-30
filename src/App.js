import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Tag,
  Badge,
  Radio,
  Collapse,
  Dropdown,
  Menu,
  Card,
  Modal,
} from "antd";

import "./App.less";
const { Panel } = Collapse;
const { Option } = Select;
const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const App = () => (
  <>
    <section style={{ textAlign: "center", marginTop: 48, marginBottom: 40 }}>
      <Title>h1. This is an example page to test out various components!</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
      <Tag>Test</Tag>
      <Badge>Test</Badge>
    </section>
    {/*
    <Modal title="Basic Modal" visible={true}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>*/}
    <Card hoverable={true}>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
    </Card>
    <Divider style={{ marginBottom: 60 }}>Form</Divider>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="数字输入框">
        <InputNumber min={1} max={10} defaultValue={3} size="small" />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="数字输入框">
        <Radio />
        <span className="ant-form-text"> 台机器</span>
      </Form.Item>
      <Form.Item label="开关">
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item label="滑动输入条">
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器">
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item label="日期选择框">
        <DatePicker />
      </Form.Item>
      <Form.Item label="日期范围选择框">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="评分" size="large">
        <Rate defaultValue={5} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" size="small">
            Submit
          </Button>
          <Button type="primary" size="large">
            Submit
          </Button>
          <Button>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
    <Collapse collapsible="header" defaultActiveKey={["1"]}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <p>sdsdasdsads</p>
      </Panel>
    </Collapse>
  </>
);

export default App;
