import React from 'react'
import Table from 'react-bootstrap/Table'
export default function TableView({products}) {
  return (
    <Table  responsive='xs' striped>
        <thead>
          <tr>
          <th>#</th>
            <th>Articul</th>
            <th>Quantity</th>
            <th>Package type</th>
            <th>Weight per unit</th>
            <th>price</th>
            <th>packageType</th>
            <th>sender Id</th>
          </tr>
            </thead>
        <tbody>
           {products.map((product)=>(
             <tr key={product._id}>
             <td>{product.articul}</td>
             <td>{product.bagQuantity}</td>
             <td>{product.date}</td>
             <td>{product.packageType}</td>
             <td>{product.perBagWeight}</td>
             <td>{product.price}</td>
             <td>{product.productType}</td>
             <td>{product.senderId}</td>
         </tr>
           ))}
        </tbody>
    </Table>
  )
}
