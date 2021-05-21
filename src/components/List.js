import React, { Component } from 'react'
import {connect} from 'react-redux'
import {FaSearch} from 'react-icons/fa'
import '../main.css'

class List extends Component {
    constructor(props) {//..
        super(props);
         this.state={
             search:""
         }
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log("sort" ,e.target.value)
    }
    
    render() {
        console.log("post",this.props.post)
        return (
            <div style={{marginLeft:"20px"}}>
         
         
            
              
             
            
             <form className="form-group has-search">
                
                       <span class="form-control-feedback" style={{paddingTop:"9px"}}><FaSearch/></span>
                            <input type="search" class="form-control mr-sm-2"value ={this.state.search} name="search" onChange={this.handlechange} placeholder=" Search By Title" aria-label="Search" style={{width:"500px"}}  />
                            
                
</form>
         

            
             {
                  this.props.post.filter(art=>art.title.includes(this.state.search)).map(ele=>{
                     return(
                        <div className="card" style={{width:1000}} >
                        <div className="container"  >
                         <h2>{ele.title} </h2>
                         <p >{ele.body}</p>
                         </div>
                          
                        
                            </div>
                     )
                 })
             }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        post:state.posts
    }
    
}
export default connect(mapStateToProps) (List)