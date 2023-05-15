import React from 'react'
import Sidebar from '../components/sidebar'
import Homedetail from '../components/homedetail'
import { Row , Col } from 'react-bootstrap'


const Home = () => {
  return (
    <div>
      {/* <Row> */}
{/* <Col lg={2}> */}

     <Sidebar Homepage={Homedetail}/>
{/* </Col> */}
{/* <Col lg={10}> */}

     {/* <Homedetail/> */}
{/* </Col> */}
      {/* </Row> */}
     
    </div>
  )
}

export default Home