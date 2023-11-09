import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../service/api';
import { authInterface } from '../interfaces/authInterface';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSignIn, saveToken } from '../../redux/reducers/authSlice';

export const useLoginFormik = ({onError}: {onError?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik<authInterface>({
    initialValues: {
        email_consumer: "",
        password: "",
    },
    validationSchema: Yup.object({
        email_consumer: Yup.string()
        .email('Invalid email address')
        .required('This field is required.'),
        password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('This field is required.'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return
        console.log(values)
        const response = await API.checkAccountConsumer(values)
        
        if (response.data.status === 200) {
            resetForm()
            dispatch(authSignIn(response.data.data))
            dispatch(saveToken(response.data.token))
            navigate('/')
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
