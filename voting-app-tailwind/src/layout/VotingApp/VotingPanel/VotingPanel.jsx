import React, { Component } from 'react'
import ProductList from './ProductList/ProductList'

export class VotingPanel extends Component {
  render() {
    return (
      <div className='m-auto w-5/6 max-w-3xl'>
          <h1 className="border-b text-xl font-lato font-bold mb-3 sm:text-3xl sm:my-11">Popular Product</h1>
          <ProductList/>
      </div>
    )
  }
}

export default VotingPanel