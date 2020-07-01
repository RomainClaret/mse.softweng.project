import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {BrowserRouter as Router, Route} from "react-router-dom"

import $ from "jquery"
import './App.css'

import Header from './Header'
import About from './About'
import Education from './Education'
import Publications from './Publications'
import { CommentsRedux, reduceComments } from './CommentsRedux'
import Footer from './Footer'


class App extends React.Component {
  constructor() {
    super()
    this.state = {myData: {}}
  }

  getMyData(){
    $.ajax({
      url:'/datasets/myData.json',
      dataType:'json',
      success: function(data){
        this.setState({myData: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    })
  }

  render() {
    const myStore = createStore(reduceComments)

    return (
      <Provider store={myStore}>
        <Router>
          <Header data={this.state.myData.header}/>
          <div>
            <Route exact path="/" render={rp => (<About data={this.state.myData.about}/>)}/>
            <Route path="/education" render={rp => (<Education data={this.state.myData.education}/>)}/>
            <Route path="/publications" render={rp => (<Publications data={this.state.myData.publications}/>)} />
            <Route path="/comments" component={CommentsRedux}/>
          </div>
          <Footer data={this.state.myData.footer}/>
        </Router>
      </Provider>
    )
  }

  componentDidMount() {
    this.getMyData()
  }
}

export default App
