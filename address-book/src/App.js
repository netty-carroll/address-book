import React, { Component } from 'react';
import './App.css';

class App extends Component {
      
    constructor(){
        super();
        
        this.state={
            name:"",
            number:"",
            phoneBook:[
                {name: "netty", number: "2267708"},
                {name: "tony", number: "3455604"}
                ],
            showForm:false
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                name:event.target.value
            })
        }
        
        this.handleInputChange2=(event)=>{
            this.setState({
                number:event.target.value
            })
        }
        
        this.addContact=()=>{
            
            const newContact={
                name:this.state.name,
                number:this.state.number         
            }
            
            this.setState( (prevState)=>({
                phoneBook:prevState.phoneBook.concat(newContact),
                 name:"",
                number:""
            })) 
                       
        }
        
        this.toggleShowForm=()=>{ 
            this.setState(
                { showForm: !this.state.showForm}
            )
        }                             
    }

  render() {
      
      let form=null;
      if(this.state.showForm)
      {
          form=
             (  
              <div className="container">
              <form className="form">
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange1} value={this.state.name} placeHolder="Name" />
              </div>
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange2} value={this.state.number} placeHolder="Number"/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.addContact}>Add</button>
            </form>
              </div>
          )
      }
           
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-4"></div>
        
        
        <div className="col-md-4">
        <div className="App">
        <h2 className="header">PhonebooK</h2>
        <span style={{cursor:"pointer",color:"blue",textDecoration:"underline"}} onClick={this.toggleShowForm}>Create New Contact</span>
            
        {form}
        
        {this.state.phoneBook.map(contact =>
           <div className="contacts">
           <h5>{contact.name}</h5>
           <p>{contact.number}</p>
           <hr/>
          </div>
        )} 
        </div>
        </div>
        
        
     <div className="col-md-4"></div>
     </div>
     </div>
    );
  }
}

export default App;
