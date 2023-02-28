import { FC } from 'react';
import { Table } from 'antd';
import { IOSMElements } from '../types';

// const dataSource = [
//     {
//         key: '1',
//         name: 'Mike',
//         age: 32,
//         address: '10 Downing Street',
//     },
//     {
//         key: '2',
//         name: 'John',
//         age: 42,
//         address: '10 Downing Street',
//     },
// ];

const columns = [
  //     type: string;
  // id: number;
  // lat: number;
  // lon: number;
  // timestamp: string;
  // version: string;
  // changeset: number;
  // user: string;
  // uid: string;
  // nodes?: number[]
  // tags?: {[key: string]: string}

  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'timeStamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: 'Longitude',
    dataIndex: 'lon',
    key: 'lon',
  },
  {
    title: 'Latitude',
    dataIndex: 'lat',
    key: 'lat',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (text: { [s: string]: unknown } | ArrayLike<unknown>) => {
      return <div>{text && Object.entries(text).map(([key, value]) => `${key}:${value}, `)}</div>;
    },
  },

  // {
  //     title: 'Nodes',
  //     dataIndex: 'nodes',
  //     key: 'nodes',
  // },
];

interface IProps {
  dataSource: IOSMElements[];
}

const DataTable: FC<IProps> = ({ dataSource }) => {
  return <Table dataSource={dataSource} columns={columns} />;
};
export default DataTable;
