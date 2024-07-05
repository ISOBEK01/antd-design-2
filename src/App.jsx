import React from 'react';
import { Table, Button, Input, Space, Tag, Pagination } from 'antd';
import { SearchOutlined, PlusOutlined, RedoOutlined, SettingOutlined } from '@ant-design/icons';

const { Search } = Input;

const columns = [
  {
    title: '规则名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '服务调用次数',
    dataIndex: 'serviceCalls',
    key: 'serviceCalls',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color;
      if (status === '运行中') color = 'blue';
      else if (status === '关闭') color = 'gray';
      else color = 'red';
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: '上次调度时间',
    dataIndex: 'lastScheduleTime',
    key: 'lastScheduleTime',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a href="#">配置</a>
        <a href="#">订阅警报</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'TradeCode 99',
    description: '这是一段描述',
    serviceCalls: '769万',
    status: '运行中',
    lastScheduleTime: '2020-02-18 20:33:15',
  },
  {
    key: '2',
    name: 'TradeCode 98',
    description: '这是一段描述',
    serviceCalls: '724万',
    status: '关闭',
    lastScheduleTime: '2020-02-18 20:33:15',
  },
  {
    key: '3',
    name: 'TradeCode 97',
    description: '这是一段描述',
    serviceCalls: '608万',
    status: '运行中',
    lastScheduleTime: '2020-02-18 20:33:15',
  },
  {
    key: '4',
    name: 'TradeCode 96',
    description: '这是一段描述',
    serviceCalls: '104万',
    status: '异常',
    lastScheduleTime: '2020-02-18 20:33:15',
  },
  {
    key: '5',
    name: 'TradeCode 95',
    description: '这是一段描述',
    serviceCalls: '168万',
    status: '关闭',
    lastScheduleTime: '2020-02-18 20:33:15',
  },
];

const TableComponent = () => {
  return (
    <div className="container">
       
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="footer">
            <Button type="primary" icon={<PlusOutlined />} style={{ marginRight: 8 }}>
              新建
            </Button>
            <Button>展开</Button>
            <SettingOutlined style={{ marginLeft: 8 }} />
          </div>
<br />
<br />
<br />
<br />
      <div className="header">
        <Space style={{ marginBottom: 16 }}>
          <Search
            placeholder="请输入规则名称"
            enterButton="查询"
            size="middle"
            style={{ width: 300 }}
            prefix={<SearchOutlined />}
          />
          <Input placeholder="请输入描述" size="middle" style={{ width: 300 }} />
          <Button type="primary" icon={<RedoOutlined />}>
            重置
          </Button>
        </Space>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowSelection={{}}
      
      />
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default TableComponent;
