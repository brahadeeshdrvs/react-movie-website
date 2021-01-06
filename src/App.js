import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import React, { Component } from 'react';
import styles from './Card.module.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api : [],
      loader: true
    }
  }
  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(response => response.json())
    .then(json => this.setState({api : json, loader:false}))
  }
  render() { 
    
    let cardArr = this.state.api.Search
    console.log(this.state.api.Search)
    return ( 
      <div className={styles.Main}>
          <div className={styles.CardGrid}>
            {cardArr ?  cardArr.map(item => <Cards props={item}/>)   : null}
          </div>
       
      </div>
 
    );
}
}
 

export default App;


