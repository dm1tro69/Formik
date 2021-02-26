import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: '',
}
const onSubmit = values => {
    console.log(values)
}
const validate = values => {
    let errors = {}

    if (!values.name){
        errors.name = 'Required'
    }
    if (!values.email){
        errors.email = 'Required'
    }
    if (!values.channel){
        errors.channel = 'Required'
    }

    return errors
}

const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    channel: yup.string().required('Required')
})

const OldYoutube = () => {



    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    // console.log('Form values', formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id={'name'}
                        name={'name'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}/>
                    {formik.errors.name && formik.touched.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                </div>


                <label htmlFor="email">Email</label>
                <input type="text" id={'email'}name={'email'} onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email && <div>{formik.errors.email}</div>}


                <label htmlFor="channel">Channel</label>
                <input type="text" id={'channel'}name={'channel'} onChange={formik.handleChange} value={formik.values.channel}/>
                {formik.errors.channel && <div>{formik.errors.channel}</div>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default OldYoutube