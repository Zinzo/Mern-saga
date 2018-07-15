import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import { connect } from 'react-redux';

import BoardList from '../../components/Board/BoardList';
import { 
  boardActions,
  boardSelectors,
} from '../../../state/board';

import { fetchBoardCreate } from '../../../apis/board';

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    fetchGetBoardCreateRequest
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" style={{ display: 'block' }}>
        name
      </label>
      <input
        id="name"
        placeholder="Enter your name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? 'text-input error' : 'text-input'}
      />
      <input
        id="port"
        placeholder="Enter your name"
        type="text"
        value={values.port}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? 'text-input error' : 'text-input'}
      />
      <input
        id="datas"
        placeholder="Enter your name"
        type="text"
        value={values.datas}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? 'text-input error' : 'text-input'}
      />
      {errors.name &&
      touched.name && <div className="input-feedback">{errors.name}</div>}

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};


const BoardForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    port : "",
    datas : ""
  }),
  // validationSchema: Yup.object().shape({
  //   name: Yup.string()
  //     .name('Invalid name address')
  //     .required('name is required!'),
  // }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const serverport = {
      name: values.name,
      port: values.port,
      datas : values.datas
    }

    fetchBoardCreate(serverport);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(MyInnerForm);

// const mapStateToProps = (state) => {
//   return {
      
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   // 즉시 실행 (액션)
//   return{
//     fetchGetBoardCreateRequest: () => {
//       dispatch(boardActions.fetchGetBoardCreateRequest());
//     }
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BoardForm);

export default BoardForm;