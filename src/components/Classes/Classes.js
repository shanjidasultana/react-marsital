import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Class from '../Class/Class';


const Classes = () => {
    const [classes,setClasses] =useState([]);
    useEffect(()=>{
        fetch('./Classes.JSON')
            .then(res=>res.json())
            .then(data =>setClasses(data))
    },[])
    return (
        
            <Row xs={1} md={3} className=" mx-1 g-4 p-3">
                {
                    classes.map(course=><Class
                    key={course._id}
                    class={course}
                    ></Class>)
                }

            </Row>
       
    );
};

export default Classes;