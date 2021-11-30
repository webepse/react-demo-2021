
import React, {Component, Fragment} from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const league = {
  membre1 : {
    nom: 'Batman',
    age: 46
  },
  membre2 : {
    nom: 'Superman',
    age: 46
  },
  membre3 : {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 31
  }
}

class App extends Component {
  state = {
    league : league,
    plus : 4
  }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age +=nb
    this.setState({league})
  }
  
  render() { 
    const {title} = this.props
    return (
      <Fragment>
          <div className="App">
            <h1>React App</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aperiam est provident reiciendis! Architecto nam natus temporibus veritatis, nisi velit odio, magni vitae praesentium est accusantium sequi ullam inventore soluta!</p>
          </div>
         <Membre 
          nom={this.state.league.membre1.nom} 
          age={this.state.league.membre1.age} 
         />
         <Membre 
          nom={this.state.league.membre2.nom} 
          age={this.state.league.membre2.age} 
         />
         <Membre 
          nom={this.state.league.membre3.nom} 
          age={this.state.league.membre3.age} 
         />
         <Membre 
          nom={this.state.league.membre4.nom} 
          age={this.state.league.membre4.age} 
         />

         <Button 
            plus={this.state.plus}
            vieillir={() => this.handleClick(this.state.plus)}
         />
      </Fragment>
    )
    // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'React App'))
  }
}
 
export default App;