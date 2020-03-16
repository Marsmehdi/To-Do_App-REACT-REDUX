import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD,DELETE,COMPLITE,EDIT,btedit}from '../actions/action'
import { Button } from "react-bootstrap"




class Todo extends Component {
    state={
        txt:'',
        edit:""
    }
    handleChange=e=>{
        
        this.setState({txt:e.target.value})
    }
  
    handlChange=e=>{
        
        this.setState({edit:e.target.value})
    }


    handleDelete = (index)=>{
        
           
            this.props.DELETE((el,i)=>(index)!==i)
        
    }


hendleadd=(e)=>{
    e.preventDefault();
    this.props.ADD({txt:this.state.txt,isComplite:false,edit:true})
   
    this.setState({edit:this.state.txt})
    this.setState({txt:""})
}

handleComplete= (index)=>{
    
 this.props.COMPLITE(index)
   
}
handleedit= (index)=>{
    
    this.props.btedit(index)
      
   }

handleEdit= (index)=>{
 
    this.props.EDIT((el,i)=>(index===i )?{...el, txt :this.state.edit,edit:!el.edit}: el)
    
    
      
   }


    render() {
        return (
       
<div className="container" >
<h1 align="center">To Do App</h1>
               

                <form  className="form-row align-items-center" onSubmit={this.hendleadd}>
              <input
                className="form-control nb-2"
                value={this.state.txt}
                onChange={this.handleChange}
               
              />
              <button className="btn btn-primary">+</button>
            </form>
            <ul>
                {this.props.x.map((item,i)=>(

                
    <li key={i}>
    {item.edit?(<input 
                value={item.txt}
                style={{textDecoration:item.isComplite ? 'line-through':''}} 
                   readOnly
                      ></input>):   
                            (<input
                                className="input"
                                value={this.state.edit}
                                style={{textDecoration:item.isComplite ? 'line-through':''}} 
                                onChange={this.handlChange}
                               // className="form-control nb-2"
                              />)}

{item.edit?(
<Button variant="success"  onClick={()=>this.handleedit(i)}>Edit</Button>  ):(
<Button variant="danger" onClick={()=>this.handleEdit(i)}>Save</Button>)}





             <Button variant="success"  onClick={()=>this.handleComplete(i)}>{item.isComplite ? "undo": "complete"}</Button>   
             <Button variant="danger" onClick={()=>this.handleDelete(i)}>delete</Button>
    </li>
    
                )
                
    
                )}
                
            </ul>



        
            </div>
        )
    }
} 
   
const mapStateToProps=state=>{
    return {x: state}
}
const mapDispatchToProps=(dispatch)=>{
    return {ADD:(payload)=>dispatch(ADD(payload)),DELETE:(payload)=>dispatch(DELETE(payload)),
    COMPLITE:(payload)=>dispatch(COMPLITE(payload)),EDIT:(payload)=>dispatch(EDIT(payload)),btedit:(payload)=>dispatch(btedit(payload))} 

}


export default connect(mapStateToProps,mapDispatchToProps)(Todo) 