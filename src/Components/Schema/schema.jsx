import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  currentWeight: Yup.number().required('Required'),
  goalWeight: Yup.number().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().required('Required'),
  preferredDate: Yup.date().required('Preferred Date is required'),
  preferredTime: Yup.string().required('Preferred Time is required'),
});

export default validationSchema;
