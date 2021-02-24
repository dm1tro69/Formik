import React from 'react'
import {Formik, Field, Form, useField, FieldArray} from 'formik'
import {TextField, Button, Checkbox, Radio, FormControlLabel, Select, MenuItem} from "@material-ui/core";
import * as Yup from 'yup'
import * as uuid from "uuid";
import Forms1 from "./Forms1";

const MyRadio = ({label, ...props}) => {
    const [field] = useField(props)
   return (
       <FormControlLabel {...field} control={<Radio/>} label={label}/>
   )
}
const MyTextField = ({placeholder, ...props}) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''

    return (
        <TextField placeholder={placeholder} {...field} helperText={errorText} error={!!errorText}/>
    )
}

const validationSchema = Yup.object({
    firstName: Yup.string().required().max(10),
    lastName: Yup.string().required().max(10)
})

function App() {
  return (
      <>
      <Forms1/>

    {/*  <div >*/}
    {/*  <Formik initialValues={{firstName: '', lastName: '', isTall: false, cookies: [], yogurt: '', pets: [{type: 'cat', name: 'jarvis', id: uuid()}]}}*/}
    {/*          validationSchema={validationSchema}*/}
    {/*          // validate={(values)=> {*/}
    {/*          //     const errors = {}*/}
    {/*          //*/}
    {/*          //     if(values.firstName.includes('bob')){*/}
    {/*          //         errors.firstName = 'no bob'*/}
    {/*          //     }*/}
    {/*          //*/}
    {/*          //     return errors*/}
    {/*          // }}*/}
    {/*          onSubmit={(data, {setSubmitting})=> {*/}
    {/*      setSubmitting(true)*/}
    {/*      //make async call*/}
    {/*    console.log(data)*/}
    {/*      setSubmitting(false)*/}

    {/*  }}>*/}
    {/*    {({values, errors, isSubmitting})=> (*/}
    {/*      <Form >*/}
    {/*          <MyTextField placeholder={'firstName'} type={'input'} name={'firstName'}/>*/}
    {/*          /!*<Field placeholder={'firstName'} type={'input'} name={'firstName'} as={TextField}/>*!/*/}
    {/*          <div>*/}
    {/*              <MyTextField placeholder={'lastName'} type={'input'} name={'lastName'}/>*/}

    {/*          </div>*/}
    {/*          <div>*/}
    {/*              <Field name={'isTall'} type={'checkbox'} as={Checkbox}/>*/}
    {/*              <div>cookies: </div>*/}
    {/*              <Field name={'cookies'} type={'checkbox'} as={Checkbox} value={'chocolate chip'}/>*/}
    {/*              <Field name={'cookies'} type={'checkbox'} as={Checkbox} value={'snickerdoodle'}/>*/}
    {/*              <Field name={'cookies'} type={'checkbox'} as={Checkbox} value={'sugar'}/>*/}
    {/*              <div>yogurt:</div>*/}
    {/*              <MyRadio name={'yogurt'} type={'radio'} value={'peach'} label={'peach'}/>*/}
    {/*              <MyRadio name={'yogurt'} type={'radio'} value={'blueberry'}label={'blueberry'}/>*/}
    {/*              <MyRadio name={'yogurt'} type={'radio'}  value={'apple'}label={'apple'}/>*/}


    {/*          </div>*/}
    {/*          <FieldArray name={'pets'}>*/}
    {/*              {(arrayHelpers)=> (*/}
    {/*                  <div>*/}
    {/*                      {values.pets.map((pet, index)=> {*/}
    {/*                          const name = `pets.${index}.name`*/}
    {/*                          return (*/}
    {/*                              <div key={pet.id}>*/}
    {/*                                  <MyTextField placeholder={'pet name'} name={name}/>*/}
    {/*                                  <Field name={`pets.${index}.type`} type={'select'} as={Select}>*/}
    {/*                                        <MenuItem value={'cat'}>cat</MenuItem>*/}
    {/*                                        <MenuItem value={'frog'}>frog</MenuItem>*/}
    {/*                                        <MenuItem value={'dog'}>dog</MenuItem>*/}
    {/*                                  </Field>*/}
    {/*                              </div>*/}
    {/*                          )*/}
    {/*                      })}*/}
    {/*                  </div>*/}
    {/*              )}*/}
    {/*          </FieldArray>*/}

    {/*            <div>*/}
    {/*                <Button disabled={isSubmitting} type={'submit'}>submit</Button>*/}

    {/*            </div>*/}

    {/*            <pre>{JSON.stringify(values, null, 2)}</pre>*/}
    {/*            <pre>{JSON.stringify(errors, null, 2)}</pre>*/}
    {/*      </Form>*/}
    {/*  )}*/}

    {/*  </Formik>*/}
    {/*</div>*/}
      </>
  );
}
export default App

