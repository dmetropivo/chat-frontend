import Input from '../../Input/Input';
import { useFormik } from 'formik';
import * as Yup from "yup";
import './ChatForm.scss'
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../store/chat/action';
import { useParams } from 'react-router-dom';


const ChatForm = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required(),
      message: Yup.string()
        .required('Email is required')
        .max(255, 'Max message length is 255'),
    }),
    onSubmit: (values) => {
      dispatch(
        sendMessage({
          name: values.name,
          message: values.message,
          chatID: Number(chatId),
        }),
      );
      formik.setFieldValue('message', '')
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={'formWrapper'}>
      <Input
        error={formik.errors.name}
        placeholder={'Nickname'}
        name={'name'}
        id={'name'}
        type={'text'}
        value={formik.values.name}
        onChange={formik.handleChange}
        className={'nicknameInput'}
      />
      <Input
        error={formik.errors.message}
        placeholder={'Message'}
        name={'message'}
        id={'message'}
        type={'text'}
        value={formik.values.message}
        onChange={formik.handleChange}
        className={'messageInput'}

      />
      <button
        className={'button primary'}
        type={'submit'}>Send</button>
    </form>
  )
}

export default ChatForm;