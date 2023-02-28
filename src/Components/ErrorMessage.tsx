import { FC } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface IProps {
  message?: string;
}
const ErrorMessage: FC<IProps> = ({ message }) => {
  const text = message ?? 'Something went wrong!';
  return <Text type="danger">{text}</Text>;
};

export default ErrorMessage;
