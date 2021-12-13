
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
    plus : 2
  }
  
  componentDidMount() {
    console.log('montage')
  }

  componentDidUpdate() {
    console.log('je recharge mon composant')
  }

  componentWillUnmount() {
    console.log('démontage')
  }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age +=nb
    this.setState({league})
  }
  
  render() { 
    const {title} = this.props
    // ["membre1","membre2","membre3","membre4"]
    // je boucle mon tableau pour récup les keys et aller chercher dans mon state avec les clées les valeurs
    // <Membre age={this.state.league.membre1.age} />
    // <Membre age={this.state.league.iteration.age} />
    // <Membre age={this.state.league[iteration].age} />
    const liste = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
      )
    })


    return (
      <Fragment>
          <div className="App">
            <h1>React App</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aperiam est provident reiciendis! Architecto nam natus temporibus veritatis, nisi velit odio, magni vitae praesentium est accusantium sequi ullam inventore soluta!</p>
          </div>
        {liste}
       
        
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


