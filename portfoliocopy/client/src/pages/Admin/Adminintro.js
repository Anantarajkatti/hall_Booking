import React from 'react'
import {  Form, Input, message } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import {ShowLoading , HideLoading} from "../../redux/rootslice"
import axios from "axios"


function Adminintro() {
  
  const dispatch=useDispatch();
  const {portfolioData}= useSelector((state)=> state.root)

  const  onFinish = async(values)=>{
    console.log(values)
     try {
        dispatch(ShowLoading())
        const  response= await axios.put('/api/portfolioRoute/update-intro', {
          ...values,
          _id: portfolioData.intro._id,
        }
        
      );
        dispatch(HideLoading())
         if(response.data.success){
          message.success(response.data.message)
        }else{
          message.error(response.data.message)
        }
     } catch (error) {
      dispatch(HideLoading())
       message.error(error.message)
     } 
   
  }
  //console.log(portfolioData)
  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
        <Form.Item name="welocmeText" label="Welcome Text">
            <input placeholder='welcome text'/>
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
            <input placeholder='First Name' />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
            <input placeholder='Last Name'/>
        </Form.Item>
        <Form.Item name="caption" label="Caption">
            <input placeholder='Caption'/>
        </Form.Item>
        <Form.Item name="description" label="Description">
            <textarea placeholder='description'/>
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-primary text-white' type="submit">SAVE</button>
        </div>
      </Form>

    </div>
  )
}

export default Adminintro