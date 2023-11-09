import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../service/api';
import { authInterface } from '../interfaces/authInterface';
import { useNavigate } from 'react-router-dom';

export const useRegistrationFormik = ({onError}: {onError?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal

  const navigate = useNavigate()

  const formik = useFormik<authInterface>({
    initialValues: {
        consumer_name: "",
        email_consumer: "",
        password: "",
        telephone_consumer: "",
        gender: ""
    },
    validationSchema: Yup.object({
        consumer_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required.'),
        email_consumer: Yup.string()
        .email('Invalid email address')
        .required('This field is required.'),
        password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('This field is required.'),
        telephone_consumer: Yup.string()
        .max(13, 'Maximum only 13 characters')
        .required('This field is required.'),
        gender: Yup.string()
        .required('This field is required.')
        .oneOf(['Male', 'Female'], 'Invalid gender')
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return
        console.log(values)
        const response = await API.createAccountConsumer(values)
        
        if (response.data.status === 200) {
            resetForm()
            navigate('/signin')
        } else {
          onError(response.data.message)
        }
        
      } catch (error: any) {
        onError(error.data.message)
      }
    }
  });

  return formik

};
