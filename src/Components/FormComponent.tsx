import { FC } from 'react';
import { Button, Form, InputNumber, Slider, Typography } from 'antd';
import { GeoEnums } from '../helpers/locationUtils';
import { IFormValues } from '../types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
interface IProps {
  onFormSubmit: (values: IFormValues | null) => void;
}
const FormComponent: FC<IProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: IFormValues) => {
    onFormSubmit(values);
  };

  const onClear = () => {
    onFormSubmit(null);
  };

  return (
    <Form {...layout} form={form} name="geoLocation" onFinish={onFinish} style={{ maxWidth: 600, margin: '20px 10px' }}>
      <Form.Item>
        <Typography>Example: Longitude: 44.234, Latitude: 43.023, Box Side: 20</Typography>
      </Form.Item>
      <Form.Item name="Longitude" label="Longitude" rules={[{ required: true, message: 'Please provide a Longitude' }]}>
        <InputNumber
          style={{ width: '100%' }}
          max={GeoEnums.LongitudeMax}
          min={GeoEnums.LongitudeMin}
          step={GeoEnums.step}
        />
      </Form.Item>
      <Form.Item name="Latitude" label="Latitude" rules={[{ required: true, message: 'Please provide a Latitude' }]}>
        <InputNumber
          style={{ width: '100%' }}
          max={GeoEnums.LatitudeMax}
          min={GeoEnums.LatitudeMin}
          step={GeoEnums.step}
        />
      </Form.Item>
      <Form.Item name="boxSide" label="Box Side">
        <Slider
          min={1}
          max={1000}
          marks={{
            0: '0',
            500: '500',
            1000: '1000',
          }}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="link" htmlType="reset" onClick={onClear}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
