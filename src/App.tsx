import './App.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
import FormComponent from './Components/FormComponent';
import { IFormValues } from './types';
import DataTable from './Components/DataTable';
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
  const onFormSubmit = (values: IFormValues) => {
    setFormData(values);
  };
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header style={headerStyle}>GeoJSON Features </Header>
      <Content style={contentStyle}>
        <FormComponent onFormSubmit={onFormSubmit} />
        {formData && <DataTable formData={formData} />}
      </Content>
      <Footer style={footerStyle}>GeoJSON (c)</Footer>
    </Layout>
  );
}

export default App;
