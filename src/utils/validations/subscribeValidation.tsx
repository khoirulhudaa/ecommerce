import { useFormik } from 'formik';
import * as Yup from 'yup';
import store from '../../redux/store';
import API from '../../service/api';
import { requestInterface } from '../interfaces/requestInterface';

export const useFormikSubscribe = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal

  const formik = useFormik<requestInterface>({
    initialValues: {
        email_consumer: "",
    },
    validationSchema: Yup.object({
        email_consumer: Yup.string()
        .email('Invalid email address')
        .required('This field is required.'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return
        console.log(values)
        const response = await API.newSubscribe(values)
        
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
