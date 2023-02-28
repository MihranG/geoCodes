import { FC, useEffect, useState } from 'react';
import { IFormValues, IOSMElements } from '../types';
import { getOpenStreetMapsData } from '../api';
import { osmToJson } from '../helpers/osmTools';
import Loading from './Loading';
import DataTable from './DataTable';

interface IProps {
  formData: IFormValues;
}

const DataSet: FC<IProps> = ({ formData }) => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<IOSMElements[]>([]);
  useEffect(() => {
    console.log('useEffect', formData);
    setLoading(true);
    getOpenStreetMapsData(formData)
      .then((res) => {
        osmToJson(res);
        if (res?.elements) {
          setTableData(res?.elements);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formData]);
  return loading ? <Loading /> : <DataTable dataSource={tableData} />;
};

export default DataSet;
