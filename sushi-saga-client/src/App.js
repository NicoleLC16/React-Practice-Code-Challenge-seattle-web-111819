import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    wallet: 100,
    current: 0
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  getFourSushis = () => {
    return this.state.sushis.slice(this.state.current % 100, this.state.current % 100 + 4)
  }


  // getFourSushis = () => {
  //   let {sushis, current} = this.state
  //   let array = sushis.slice(current).concat(sushis.slice(0, current)) 
  //   let filtered = array.filter(sushi => !sushi.eaten)
  //   return filtered.slice(0, 4)
  // }

  onEatSushi = nomSushi => {
    console.log(nomSushi)
    if (!nomSushi.eaten && this.state.wallet >= nomSushi.price) {
    this.setState(prev => ({
      sushis: prev.sushis.map(sushi => sushi.id === nomSushi.id ? {...sushi, eaten: true} : sushi ),
      wallet: prev.wallet - nomSushi.price
    }))
    }
  }

  onMoreSushi = () => {
    this.setState(prev => ({
      current: prev.current + 4
    }))
  }

  eatenSushi = () => this.state.sushis.filter(sushi => sushi.eaten)

  //eatenSushi with reduce
  // eatenSushi = () => {
  //   return this.state.sushis.reduce((memo, sushi) => sushi.eaten ? memo.concat(sushi) : memo, [])
  // }

  onAddFunds = () => {
    this.setState(prev => ({
      wallet: prev.wallet + 100
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.getFourSushis()} onEatSushi={this.onEatSushi} onMoreSushi={this.onMoreSushi}/>
        <Table wallet={this.state.wallet} eatenSushi={this.eatenSushi()} onAddFunds={this.onAddFunds}/>
      </div>
    );
  }
}

export default App;