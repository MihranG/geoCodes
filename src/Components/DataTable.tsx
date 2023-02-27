import { Table } from 'antd';
import { FC, useEffect, useState } from 'react';
import { IFormValues } from '../types';
import { getOpenStreetMapsData } from '../api';
import { osmToJson } from '../helpers/osmTools';
import Loading from './Loading';

interface IProps {
  formData: IFormValues;
}

const DataTable: FC<IProps> = ({ formData }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('useEffect', formData);
    setLoading(true);
    getOpenStreetMapsData(formData)
      .then((res) => {
        osmToJson(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formData]);
  return loading ? <Loading /> : <Table />;
};

export default DataTable;
