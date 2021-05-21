import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setdata} from '../actions/postAction'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"",
            body:""
        }
    }
    handleChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       const  formdata={
            title:this.state.title,
             body:this.state.body
        }
        console.log("form data",formdata)
        this.props.dispatch(setdata(formdata))
        this.props.history.push("/postlists")
    }
    
    render() {
        
        return (
            <div style={{marginTop:"10px"}}>
              
                    <h5>ADD POSTS</h5>
                    <form onSubmit={this.handleSubmit}>
                        
                    <label>Post Title</label><br/>
                            <input 
                            type="text"
                            name="title" 
                            value={this.state.value}
                            placeholder="Your Post Title Goes Here..." 
                            onChange={this.handleChange} 
                            className="form-control"
                            required/>
                            <br/>
                        
                       
                            <label>Post Body</label><br/>
                            <input 
                            type="text"
                            name="body" 
                            value={this.state.value}
                            placeholder="Your Post Body Goes Here..." 
                            onChange={this.handleChange} 
                            className="form-c////ontrol"
                            required/>
                            <br/>
                    
                            <button type="submit" className="btn submit_btn">
          submit
        </button>
                    </form>
                </div>

            
                

        );
    }
}

export default connect() (Form);