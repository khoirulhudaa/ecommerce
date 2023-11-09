import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import API from '../../service/api';
import { requestInterface } from '../interfaces/requestInterface';
import store from '../../redux/store';

export const useFormikRequest = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal
  const userAuth = store.getState().authReducer.auth

  const formik = useFormik<requestInterface>({
    initialValues: {
        email_consumer: userAuth ? userAuth?.email_consumer : "",
        messageRequest: ""
    },
    validationSchema: Yup.object({
        email_consumer: Yup.string()
        .email('Invalid email address')
        .required('This field is required.'),
        messageRequest: Yup.string()
        .min(10, 'Must be 10 characters or less')
        .required('This field is required.'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return
        console.log(values)
        const response = await API.createRequest(values)
        
        if (response.data.status === 200) {
            resetForm()
            onResponse(response.data.status)
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
