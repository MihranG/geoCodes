import { FC } from 'react';
import { Button, Form, Input, InputNumber, Slider } from 'antd';
import { GeoEnums } from '../helpers/locationUtils';
import { IFormValues } from '../types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
interface IProps {
  onFormSubmit: (values: IFormValues) => void;
}
const FormComponent: FC<IProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: IFormValues) => {
    console.log('onFinish', values);
    onFormSubmit(values);
  };

  return (
    <Form {...layout} form={form} name="geoLocation" onFinish={onFinish} style={{ maxWidth: 600 }}>
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
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
