import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal, ModalHeader, ModalBody , Row , Button, Table } from 'reactstrap'

 class Emaildata extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
      
      return (
      <div>
         {this.props.data !=null?(
          <Table>
      
          <thead>
          <tr>
              <th>ToEmail</th>
              <th>Subject</th> 
              <th>CreateDate</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
            </thead>

        <tbody>
        {this.props.data && this.props.data.map((details,index)=>{
           return[
            <tr>
            <td key={index}>{details.toEmail}</td>
            <td key={index}>{details.Subject}</td>
            <td key={index} >{details.CreateDate}</td>
            <td key = {index}><Button onClick={this.toggle}>Body</Button>
            <Row>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Body Description</ModalHeader>
                    <ModalBody>
                    {details.Body}
                    </ModalBody>
                    
            </Modal>
          </Row>
       
            </td>
            {/* <td key = {index}>{details.Body}</td> */}
            {/* <td key={index} >{details.Status}</td> */}
            {details.Status=="Succesful" ? (<font color="Green"><td>{details.Status}</td></font>) : (<font color="Red"><td>{details.Status}</td></font>)}
             </tr> ]
        })}
       
            </tbody>
       
          </Table>

         ):(<div></div>)}
      </div>
   )  
      
}
  
}
    
const mapStateToProps = (state) => ({
    data: state.data,
  })
  
  Emaildata = connect(
    mapStateToProps,
    null
  )(Emaildata)
  
  export default Emaildata;