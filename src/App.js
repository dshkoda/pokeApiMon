import React from 'react';
import './app.scss';
import {connect} from 'react-redux';
import { Layout } from './components/layout/Layout';
import { MainContext } from './components/context/MainContext';
import { showNav, hideNav } from './redux/actionCreators/nav';
import { getPokemons } from './redux/actionCreators/main';
import { getImages } from './redux/actionCreators/images';
import { getItem } from './redux/actionCreators/item';


class App extends React.Component {


  componentDidMount(){
    this.props.getPokemons()
    this.props.getImages()
  }

  render(){


    return(
      <MainContext.Provider value = {{state: this.props}}>
        <Layout />
      </MainContext.Provider>
      
    )
  }
}


function mapStateToProps(state){
  return{
    isOpen: state.nav.isOpen,
    pokemons: state.main.pokemons,
    loading: state.main.loading,
    images: state.images.images,
    name: state.item.name,
    height: state.item.height,
    weight: state.item.weight,
    types: state.item.types,
    abilities: state.item.abilities,
    itemLoading: state.item.itemLoading
  }
}

function mapDispatchToProps(dispatch){
  return{
    showNavHadler: ()=> dispatch(showNav()),
    hideNavHandler: ()=> dispatch(hideNav()),
    getPokemons: ()=> dispatch(getPokemons()),
    getImages: ()=> dispatch(getImages()),
    getItem: (url)=> dispatch(getItem(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
