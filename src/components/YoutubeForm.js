import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import TextError from "./TextError";

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    }
}
const onSubmit = values => {
    console.log(values)
}

const validationSchema = yup.object({
    name: yup.string().required('Required'),
    comments: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    channel: yup.string().required('Required')
})

const YoutubeForm = () => {




    // console.log('Form values', formik.values)
return (
<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
>
    <Form >
        <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field
                type="text"
                id={'name'}
                name={'name'}/>
            <ErrorMessage name={'name'} component={TextError}/>
        </div>


        <label htmlFor="email">Email</label>
        <Field
            type="text"
            id={'email'}
            name={'email'}

        />
        <ErrorMessage name={'email'}/>


        <label htmlFor="channel">Channel</label>
        <Field
            placeholder={'Channel'}
            type="text"
            id={'channel'}
            name={'channel'}

        />
        <ErrorMessage name={'channel'}/>

        <label htmlFor="comments">Comments</label>
        <Field as={'textarea'}
            placeholder={'Comments'}
            type="text"
            id={'comments'}
            name={'comments'}

        />
        <ErrorMessage name={'comments'}/>

        <label htmlFor="address">Address</label>
        <Field name={'address'}>
            {
                (props)=> {
                    const {field, form, meta} = props
                    console.log('render props', props)
                    return (
                        <div>
                            <input  id={'address'} {...field}/>
                            {meta.touched && meta.error && <div style={{color: 'red'}}>{meta.error}</div>}
                        </div>
                    )
                }
            }
        </Field>
        <ErrorMessage name={'address'}/>

        <label htmlFor="facebook">Facebook profile</label>
        <Field
               placeholder={'facebook'}
               type="text"
               id={'facebook'}
               name={'social.facebook'}

        />
        <ErrorMessage name={'twitter'}/>
        <label htmlFor="twitter">twitter profile</label>
        <Field
            placeholder={'twitter'}
            type="text"
            id={'twitter'}
            name={'social.twitter'}

        />
        <ErrorMessage name={'twitter'}/>

        <button type="submit">Submit</button>
    </Form>
</Formik>
)

}

export default YoutubeForm