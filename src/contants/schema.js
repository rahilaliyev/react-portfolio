import * as yup from 'yup';

export const CONTACT_SCHEMA = yup.object().shape({
  name: yup.string().required('Required!'),
  email: yup.string().required('Required!'),
  message: yup.string().required('Required!'),
});
