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
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getOpenStreetMapsData(formData)
      .then((res) => {
        // todo need to figure out is it needed seems like axios does the data handling
        osmToJson(res);
        if (res?.elements) {
          setTableData(res?.elements);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        console.log(2);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formData]);
  return loading ? <Loading /> : <DataTable dataSource={tableData} error={error} />;
};

export default DataSet;
