// import React, { Component } from 'react';
// import { withFormik } from 'formik';
// import Yup from 'yup';

// // Our inner form component. Will be wrapped with Formik({..})
// const BoardForm = props => {

//     return (
//       <form>
//         <label htmlFor="name" style={{ display: 'block' }}>
//           name
//         </label>
//         <input
//           id="name"
//           placeholder="Enter your name"
//           type="text"
//         />

//         <input
//           id="port"
//           placeholder="Enter your port"
//           type="text"
//         />

//         <input
//           id="data"
//           placeholder="Enter your datas"
//           type="text"
//         />
  
//         <button
//           type="button"
//           className="outline"
//         >
//           Reset
//         </button>
//         <button type="submit" disabled="">
//           Submit
//         </button>
//       </form>
//     );
//   };

// export default BoardForm;

import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

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
  } = props;

  console.log(props);
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
  handleSubmit: (values, { setSubmitting }) => {
    const serverport = {
      name: values.name,
      port: values.port,
      datas : values.datas
    }

    fetchBoardCreate(serverport)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(MyInnerForm);

export default BoardForm;