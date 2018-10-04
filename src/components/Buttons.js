import React from 'react';
import cx from 'classnames';
import "../styles/components/Buttons.scss";


class Buttons extends React.Component{
  constructor(){
    super();
    this.state={

      home:true,
      family:false,
      chat:false,

    }


    this.handleClickHome = this.handleClickHome.bind(this)
    this.handleClickFamily = this.handleClickFamily.bind(this)
    this.handleClickChat = this.handleClickChat.bind(this)
  }



  handleClickHome(event){
    event.preventDefault();
    this.setState({
      home:true,
    family:false,
    chat:false,
  })
  }
  handleClickFamily(event){
    event.preventDefault();
    this.setState({
      home:false,
    family:true,
    chat:false,
  })
  }
  handleClickChat(event){
    event.preventDefault();
    this.setState({
      home:false,
    family:false,
    chat:true,
  })
  }


  render(){
    const classes__home=cx('fas fa-home', {home: this.state.home});
    const classes__family=cx('fas fa-users', {family: this.state.family});
    const classes__chat=cx('fas fa-comments', {chat: this.state.chat});

    return(
      <div className='buttons'>
        <i onClick={this.handleClickHome} className={classes__home}></i>
        <i name='family' onClick={this.handleClickFamily} className={classes__family}></i>
        <i name='chat' onClick={this.handleClickChat} className={classes__chat}></i>

      </div>
    )

}}

export default Buttons;
