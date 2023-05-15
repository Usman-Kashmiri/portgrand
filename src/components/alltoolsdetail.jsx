





import React from 'react'
import './alltool.css'
import { Row ,Col } from 'react-bootstrap'
import content from './images/contenticon.png'
// import Sidebar from '../components/sidebar'
import { engageAudience ,manage } from '../data/data'
// import Homedetail from '../components/homedetail'


const Alltooldetails = () => {
  return (
    <div style={{ width:'100%',backgroundColor:'#f5fafe'}}>
        <div className='searchbox'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
        ></path>
      </g>
    </svg>
    <input className='searchinput' placeholder='Search all tool for keywords'/>
        </div>
     <Row style={{ width:'90%' , marginLeft:'10%'}}>
        <Col lg={6} >
        <p className='toolheadingone'>Engaged Audience</p>
        {
            engageAudience.map(( value , i) => {
                return(
        <div style={{display:'flex' , paddingBottom:'0px'}} key={i}>
            {value.image}
            {/* <img  width={25} height={25} src={content}/> */}
            <div className='toolfirst'>
                {/* <p> */}

                 {value.heading}
                {/* </p> */}
                 
            <p className='tooldetails'>{value.details}</p>
                 </div>
            {/* <br /> */}
            
        </div>
                )
            })
        }

        <p className='toolheadingone'>Advertise </p>
        </Col>
        <Col lg={6}>
        <p className='toolheadingone'>Manage </p>
        {
            manage.map(( value , i) => {
                return(
        <div style={{display:'flex' , paddingBottom:'0px' , marginBottom:'0px'}} key={i}>
            {value.image}
            {/* <img  width={25} height={25} src={content}/> */}
            <div className='toolfirst'>
                
                 {value.heading}
                 
            <p className='tooldetails'>{value.details}</p>
                 </div>
            {/* <br /> */}
            
        </div>
                )
            })
        }
            {/* <p className='toolfirst'>
                Setting
                </p> */}
        </Col>
     </Row>
     
    </div>
  )
}

export default Alltooldetails