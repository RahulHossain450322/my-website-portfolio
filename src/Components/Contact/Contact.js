import React from 'react'
import ContactStyle from './Contact.css'
import {useFormik} from 'formik'
import * as Yup from 'yup';

function Contact() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      comment:''
    },
    validationSchema : Yup.object({
      name:Yup.string().min(3,'Name must have at least 3 charecters!').required('Please fill out this filed as it is required!'),
      email:Yup.string().email('Inavalid Email').required('Please fill out this filed as it is required!'),
      comment:Yup.string().min(100,'Cover letter must be 100 charecters!').required('Please fill out this filed as it is required!'),
    }),
    onSubmit : (values)=>{
      
    }
    
  })
 // console.error(formik.errors)
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact_content'>
            <form onSubmit={formik.handleSubmit} className='form' action='' method='' >
                <div className='form_div_title'>
                    <h2 className='text-center form_title'>Submit Your Conversation</h2>
                </div>
                <div className='form_div mt-3'>
                    <label className='form-label' htmlFor='name'>Name:</label>
                    <input 
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                    type='text'
                    className='form-control mb-1'
                    id='name' />
                    {formik.touched.name && formik.errors && <span className='formik_errors text-danger'>{formik.errors.name}</span>}

                </div>
                <div className='form_div mt-3'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input
                     value={formik.values.email} 
                     onChange={formik.handleChange}
                     type='email'
                     className='form-control mb-1' 
                     id='email' />
                     {formik.touched.email && formik.errors && <span className='formik_errors text-danger'>{formik.errors.email}</span>}
                </div>
                <div className='form_div mt-3'>
                    <label className='form-label' htmlFor='comment'>Write Your Cover Letter:</label>
                    <textarea 
                    value={formik.values.comment} 
                    onChange={formik.handleChange} type='text-area' 
                    className='form-control mb-1' 
                    id='comment'>

                    </textarea> 
                    {formik.touched.comment && formik.errors && <span className='formik_errors text-danger'>{formik.errors.comment}</span>}
                </div>
                <div className='form_div mt-3'>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
