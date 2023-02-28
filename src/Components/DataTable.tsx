import { FC } from 'react';
import { Table } from 'antd';
import { IOSMElements } from '../types';
import ErrorMessage from './ErrorMessage';

const columns = [
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
  // here can be added elements for matching fields in the dataSource
];

interface IProps {
  dataSource: IOSMElements[];
  error: boolean;
}

const DataTable: FC<IProps> = ({ dataSource, error }) => {
  return error ? <ErrorMessage /> : <Table dataSource={dataSource} columns={columns} />;
};
export default DataTable;
