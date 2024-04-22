import { useFormik } from "formik";
import { Box, Button, FormControl, Input, Select, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


interface Error {
  name?: string | null
  phone?: string | null
  email?: string | null
  service?: string | null
  text?: string | null
}
const ContactForm = () => {
  const [disableButton, setDisableButton] = useState(false)

 const validate = (values:Error) => {
  const errors: Error = {}

  if(!values.name) {
    errors.name = 'Required'
  }

  if(!values.phone) {
    errors.phone = "Required"
  }

  if(!values.email) {
    errors.email = 'Require'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.service) {
    errors.service = 'Please Select A service'
  }

  if(!values.text) {
    errors.text = 'Required'
  }

  return errors
 }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      text: "",
      service: "",
      rememberMe: false
    },
    validate,
    onSubmit: async (values, {resetForm}) => {
      setDisableButton(true)
      //alert(JSON.stringify(values, null, 2));
      
      const messageReceived = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        text: values.text,
        service: values.service
      }

   const { data }  = await axios.get(`/api/message?messageReceived=${JSON.stringify(messageReceived)}`)

   if(data) {
      toast.success("Message sent, we will contact you shortly")
      resetForm()
   }


      setDisableButton(false)
     
    }
  });
  return ( 
      <Box width="full" bg="white" p={6}  borderWidth="1px"
      boxShadow="1px 1px 3px rgba(0,0,0,0.3)">
         <ToastContainer/>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={8} align="flex-start">
            <FormControl>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                placeholder="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
                {formik.touched.name && formik.errors.name ? (
         <Text  color='red.400'>{formik.errors.name}</Text>
       ) : null}
            </FormControl>
            <FormControl>
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone"
                onBlur={formik.handleBlur}
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
                {formik.touched.phone && formik.errors.phone ? (
         <Text  color='red.400'>{formik.errors.phone}</Text>
       ) : null}
            </FormControl>
            <FormControl>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onBlur={formik.handleBlur}
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
                {formik.touched.email && formik.errors.email ? (
         <Text  color='red.400'>{formik.errors.email}</Text>
       ) : null}
            </FormControl>
            <FormControl>
            <Select  name="service" value={formik.values.service} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Choose A Service'>
            <option value='new-home-construction'>New Home Construction</option>
            <option value='home-renovations'>Home Renovations</option>
            <option value='interior-desing'>Interior Design</option>
            <option value='exterior-remodeling'>Exterior Remodeling</option>
            <option value='projecy-management'>Project Management</option>
            </Select>
            {formik.touched.service && formik.errors.service ? (
         <Text color='red.400'>{formik.errors.service}</Text>
       ) : null}
            </FormControl>
            <FormControl>
            <Textarea
        value={formik.values.text}
        name="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder='Message'
        size='sm'
      />
        {formik.touched.text && formik.errors.text ? (
         <Text  color='red.400'>{formik.errors.text}</Text>
       ) : null}
            </FormControl>
      
            <Button 
            type="submit" 
            colorScheme="linkedin" 
            width="full">
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
   
  )
}


  
 


export default ContactForm