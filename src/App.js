
import React, { Component } from 'react';
import Products from './components/Products';
import data from './data.json';
class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    };
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart Center</a>
      </header>
      <main><div className="content">
        <div className="main">
         <Products products={this.state.products}></Products></div>
        <div className="sidebar">
          Cart items
        </div>
      </div>
      </main>
      <footer>
        all right reserved
      </footer>
    </div>
  );
}
}

export default App;
