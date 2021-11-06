import React from 'react';
import './app.scss';
import {connect} from 'react-redux';
import { Layout } from './components/layout/Layout';
import { MainContext } from './components/context/MainContext';
import { hideNav, showNav } from './redux/actionCreators/nav'
import { getApi } from './redux/actionCreators/main';
import { getImages } from './redux/actionCreators/images';

class App extends React.Component {


  componentDidCatch(){
    this.props.getApi()
    this.props.getImages()
  }

  render(){


    return(
      <MainContext.Provider value = {{state: this.props }}>
        <Layout />
      </MainContext.Provider>
      
    )
  }
}


function mapStateToProps(state){
  return{
    isOpen: state.nav.isOpen,
    api: state.main.api,
    loading: state.main.loading,
    images: state.images.images
  }
}

function mapDispatchToProps(dispatch){
  return{
    showNavHadler: ()=> dispatch(showNav()),
    hideNavHandler: ()=> dispatch(hideNav()),
    getApi: ()=> dispatch(getApi()),
    getImages: ()=> dispatch(getImages())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
