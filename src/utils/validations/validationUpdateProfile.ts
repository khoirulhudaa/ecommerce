import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import store from '../../redux/store';
import API from '../../service/api';
import { authInterface } from '../interfaces/authInterface';

export const useUpdateProfile = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal

  const userAuth = store.getState().authReducer.auth

  const formik = useFormik<authInterface>({
    initialValues: {
        consumer_name: "",
        email_consumer: "",
        telephone_consumer: "",
        gender: "",
        consumer_image: null,
        post_code:  0,
        address: "",
        consumer_image_old: null
    },
    validationSchema: Yup.object({
        consumer_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required.'),
        email_consumer: Yup.string()
        .email('Invalid email address')
        .required('This field is required.'),
        telephone_consumer: Yup.string()
        .max(13, 'Maximum only 13 characters')
        .required('This field is required.'),
        gender: Yup.string()
        .required('This field is required.')
        .oneOf(['Male', 'Female'], 'Invalid gender'),
        address: Yup.string()
        .min(15, 'Must be at lest 15 characters')
        .notRequired(),
        post_code: Yup.string()
        .max(5, 'Maximum only 4 number')
        .notRequired(),
        consumer_image: Yup.mixed()
        .test('fileType', 'Only JPG and PNG', (value: any) => {
            if (!value) return true;
            const supportedFormats = ['image/jpeg', 'image/png'];
            const fileExtension = value.type;
            const isExtensionSupported = supportedFormats.includes(fileExtension);
            return isExtensionSupported;
        })
        .test('fileSize', 'Maximal size is 2MB.', (value: any) => {
              if (!value) return true;
              return value.size <= 2 * 1024 * 1024;
        })
        .notRequired(),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return

        const formData:any = new FormData()
        formData.append('consumer_name', values.consumer_name)
        formData.append('email_consumer', values.email_consumer)
        formData.append('gender', values.gender)
        formData.append('post_code', values.post_code)
        formData.append('address', values.address)
        formData.append('telephone_consumer', values.telephone_consumer)
        if(values.consumer_image && values.consumer_image !== null) {
          formData.append('consumer_image', values.consumer_image);
        }

        const response = await API.updateAccountConsumer({consumer_id: userAuth?.consumer_id || "", body: formData})
        if (response.data.status === 200) {
            onResponse(response.data.message)
            resetForm()
        } else {
          onError(response.data.message)
        }
        
      } catch (error: any) {
        onError(error.data.message)
      }
    }
  });

  useEffect(() => {
    formik.setValues({
        consumer_name: userAuth ? userAuth.consumer_name : "",
        email_consumer: userAuth ? userAuth.email_consumer : "",
        telephone_consumer: userAuth ? userAuth.telephone_consumer : "",
        gender: userAuth ? userAuth.gender : "",
        consumer_image_old: userAuth ? userAuth.consumer_image : null,
        post_code: userAuth ? userAuth.post_code : 0,
        address: userAuth ? userAuth.address : "",
    });
}, [userAuth]);

  return formik

};
