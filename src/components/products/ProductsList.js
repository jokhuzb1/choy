import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import TableView from './TableView';


export default function ProductsList({products, deleteProduct}) {
  return (
    <Container>
      <TableView products={products} />
    </Container>
  )
}
