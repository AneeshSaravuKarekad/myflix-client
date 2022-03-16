import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

import './reviewForm.scss';

const ReviewForm = () => {
  return (
    <Formik
      initialValues={{
        caption: '',
        comment: '',
        stars: 1,
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(parseInt(values.stars), { ...values });
        // dispatch(updateProfile(values));
      }}
      validationSchema={Yup.object().shape({
        caption: Yup.string().required('Caption is required'),

        comment: Yup.string().required('Comment is required'),

        stars: Yup.number().integer().required('Please rate your experience'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="form-container" style={{ width: '100%' }}>
            <Form className="auth-form review-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label
                  className="mb-3 review-form__top-label"
                  style={{ marginRight: '1rem' }}
                >
                  Rating
                </Form.Label>
                <Form.Select
                  aria-label="select rating"
                  name="stars"
                  value={values.stars}
                  onChange={handleChange}
                  className={errors.stars && touched.stars && 'error'}
                >
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  <option value={4}>Four</option>
                  <option value={5}>Five</option>
                  <option value={6}>Six</option>
                  <option value={7}>Seven</option>
                  <option value={8}>Eight</option>
                  <option value={9}>Nine</option>
                  <option value={10}>Ten</option>
                </Form.Select>
                {errors.stars && touched.stars && (
                  <div className="input-feedback">{errors.stars}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3 review-form__top">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Form.Label className="mb-3 review-form__top-label">
                    Caption
                  </Form.Label>
                  {errors.caption && touched.caption && (
                    <div className="input-feedback">{errors.caption}</div>
                  )}
                </div>
                <Form.Control
                  type="text"
                  name="caption"
                  onBlur={handleBlur}
                  value={values.caption}
                  onChange={handleChange}
                  className={
                    errors.comment && touched.comment
                      ? 'mb-3 review-form__top-control error'
                      : 'mb-3 review-form__top-control'
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3 review-form__bottom">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Form.Label className="mb-3 review-form__bottom-label">
                    Comment
                  </Form.Label>
                  {errors.comment && touched.comment && (
                    <div className="input-feedback">{errors.comment}</div>
                  )}
                </div>
                <Form.Control
                  as="textarea"
                  name="comment"
                  onBlur={handleBlur}
                  rows={3}
                  value={values.comment}
                  onChange={handleChange}
                  className={
                    errors.comment && touched.comment
                      ? 'review-form__bottom-control error'
                      : 'review-form__bottom-control'
                  }
                />
              </Form.Group>
              <Button type="submit" variant="outline-warning">
                Post
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ReviewForm;
