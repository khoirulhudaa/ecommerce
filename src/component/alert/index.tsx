import { NavigateFunction } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = ({
    title,
    text,
    icon="success",
    showCancelButton=true,
    cancelButtonText="Cancel",
    showConfirmButton=true,
    confirmButtonText="Confirm",
    navigate,
    route
}: {
    title?: string,
    text?: string,
    icon?: "success" | "info" | "warning" | "error" | "question",
    showCancelButton?: boolean,
    cancelButtonText?: string,
    showConfirmButton?: boolean,
    confirmButtonText?: string,
    navigate?: NavigateFunction,
    route?: string
}) => {

  const MySwal = withReactContent(Swal);
  
  MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton,
      cancelButtonText,
      showConfirmButton,
      confirmButtonText,
    }).then((result: any) => {
      if (result.isConfirmed && route && navigate) {
        navigate(route)
      }
    })

}

export default Alert
