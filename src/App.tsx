import './App.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
import FormComponent from './Components/FormComponent';
import { IFormValues } from './types';
import DataSet from './Components/DataSet';
const { Content, Footer, Header } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#06183d',
};

function App() {
  const [formData, setFormData] = useState<null | IFormValues>(null);
  const onFormSubmit = (values: IFormValues | null) => {
    setFormData(values);
  };
  return (
    <Layout>
      <Header style={headerStyle}>GeoJSON Features </Header>
      <Content style={contentStyle}>
        <FormComponent onFormSubmit={onFormSubmit} />
        {formData && <DataSet formData={formData} />}
      </Content>
      <Footer style={footerStyle}>GeoJSON (c)</Footer>
    </Layout>
  );
}

export default App;
