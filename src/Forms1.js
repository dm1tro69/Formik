import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'

const Forms1 = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('only string').required('required'),
        secondName: yup.string().typeError('only string').required('required'),
        password: yup.string().typeError('only string').required('required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'password not confirmed').required('required'),
        email: yup.string().email('enter email').required(),
        confirmEmail: yup.string().email('enter email').oneOf([yup.ref('email')], 'confirm email'). required(),


    })

return (
  <div>
      <Formik initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: ''
      }}
              validateOnBlur
              onSubmit={(values)=> {
                  console.log(values)
              }}
              validationSchema={validationSchema}
      >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=> (
              <div>
                  <p>
                      <label htmlFor="name">name</label>
                      <br/>
                      <input
                          name={'name'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          type="text"/>
                  </p>
                  {touched.name && errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                  <p>
                      <label htmlFor="secondName">secondName</label>
                      <br/>
                      <input
                          name={'secondName'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.secondName}
                          type="text"/>
                  </p>
                  {touched.secondName && errors.secondName && <p style={{color: 'red'}}>{errors.secondName}</p>}
                  <p>
                      <label htmlFor="password">password</label>
                      <br/>
                      <input
                          name={'password'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          type="password"/>
                  </p>
                  {touched.password && errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                  <p>
                      <label htmlFor="confirmPassword">confirmPassword</label>
                      <br/>
                      <input
                          name={'confirmPassword'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          type="password"/>
                  </p>
                  {touched.confirmPassword && errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}
                  <p>
                      <label htmlFor="email">email</label>
                      <br/>
                      <input
                          name={'email'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          type="email"/>
                  </p>
                  {touched.email && errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                  <p>
                      <label htmlFor="confirmEmail">confirmEmail</label>
                      <br/>
                      <input
                          name={'confirmEmail'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmEmail}
                          type="email"/>
                  </p>
                  {touched.confirmEmail && errors.confirmEmail && <p style={{color: 'red'}}>{errors.confirmEmail}</p>}
                  <button
                      disabled={!isValid && !dirty}
                      type={'submit'}
                      onClick={handleSubmit}>Send</button>
              </div>
          )

          }
      </Formik>
  </div>
)
}
export default Forms1