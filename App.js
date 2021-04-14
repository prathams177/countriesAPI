import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[]
        }
    }

   
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(
            (res)=>{
                this.setState({arr:res.data})
            },
            (err)=>{
                console.log("err")
            }
        )
    }
   
   
   
   
   render(){
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>sno</th>
                        
                        <th>name</th>
                        
                        <th>capital</th>
                        
                        <th>flag</th>

                    </tr>
                </thead>

                <tbody style={{justifyContent:"center"}}>
                {this.state.arr.map((element , index)=>(
                    <tr key={index}>
                        <td >{index+1}</td>
                        <td >{element.name}</td>
                        <td>{element.capital}</td>
                        <td><img src={element.flag} size="100px" height="50px"/></td>
                    </tr>

                ))}
                </tbody>


                
                </table>
            </div>


        );
    }
}

export default App;