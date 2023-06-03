import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import "../components/UI/DataTable.css"

function DataTable(props) {
    //states
    var [api,setApi] = useState([])
    var [del,setDel] = useState();
    
    //functions
    function refetchApiData(){
        axios.get("https://backendapibyaakash.onrender.com/accounts")
        .then((recvd)=>{setApi(recvd.data)}).catch(err=>{console.log("Unable to fetch Data")})
    }
    function deleteButtonHandler(e,id){
        e.preventDefault();
        axios.delete(`https://backendapibyaakash.onrender.com/accounts/${id}`)
        .then(()=>{console.log("Data deleted Sucess");setDel(id)}).catch(()=>{console.log("Unable to delete Data")});
    }
    
    //lifecycle
    useEffect(()=>{
        refetchApiData();
        console.log("use effect working")
        props.returningChangeinState()
    },[props,del])

    //conditions
    if(props.usrStateValue===true){
        refetchApiData();
    }
    return (
        <table border={4} className="main_table">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Names</th>
                    <th>User Emails</th>
                    <th>User Password</th>
                    <th>Button</th>
                </tr>
            </thead>
            <tbody>
                {
                    api.map((data,index)=>{
                        return <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.user_name}</td>
                            <td>{data.user_email}</td>
                            <td>{data.user_password}</td>
                            <td><button onClick={(e)=>{deleteButtonHandler(e,data.id)}}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default memo(DataTable)