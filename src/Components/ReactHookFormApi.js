import React, { useEffect } from "react";
import Select from "react-select";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ReactHookFormApi = () => {
  const defaultFormValues = {
    name: "Wes",
  };
  const {
    register,
    handleSubmit,
    errors,
    watch,
    reset,
    setError,
    clearErrors,
    setValue,
    trigger,
    control,
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm({
    mode: "onSubmit", //onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
    reValidateMode: "onChange", //onChange | onBlur | onSubmit = 'onChange'
    defaultValues: defaultFormValues,
    resolver: undefined,
    context: undefined,
    shouldFocusError: true,
    shouldUnregister: false, //deprecated
  });
  const watchAllField = watch();
  // const watchAllField = watch('name');

  const onSubmit = (formData) => {
    console.log("formData", formData);
    // reset();
  };
  useEffect(() => {
    // setValue("name", "Luo", {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // trigger("email");
  }, []);
  const watchFormChanges = () => {
    let formChanged = false;
    if (JSON.stringify(defaultFormValues) !== JSON.stringify(watchAllField)) {
      formChanged = true;
    }
    return formChanged;
  };
  console.log("watchAllField", watchAllField, watch("name"));
  return (
    <Container>
      <Form
        name="contactform"
        className="contactform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col md={12}>
            <fieldset>
              <Form.Control
                name="name"
                type="text"
                size="30"
                placeholder="Name"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z]+$/,
                  maxLength: 50,
                })}
              />
              {errors.name?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="error">Invalid Name</span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="error">Your input exceed maxLength</span>
              )}
              <Form.Control
                name="email"
                type="text"
                size="30"
                placeholder="Email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="error">Email is not valid</span>
              )}
              <Form.Control
                name="phone"
                type="text"
                size="30"
                placeholder="Phone"
                ref={register({
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.phone?.type === "pattern" && (
                <span className="error">Please enter valid phone number.</span>
              )}
              <Form.Control
                name="address"
                type="text"
                size="30"
                placeholder="Address"
                ref={register}
              />
              <Form.Control
                name="password"
                type="text"
                placeholder="Enter Password"
                ref={register({
                  minLength: 8,
                })}
                onChange={() => {
                  setError("password", {
                    type: "minLength",
                    message: "password should be greater than 8",
                  });
                }}
              />
              {errors.password?.type === "minLength" && (
                <span className="error">{errors.password.message}</span>
              )}

              <Controller
                name="gender"
                control={control}
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
                as={Select}
                rules={{ required: true }}
              />
              {errors.gender?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              <br />
              <Button
                className="btn btn-lg pro"
                id="submit"
                value="Submit"
                type="submit"
                disabled={!watchFormChanges()}
              >
                Send Message
              </Button>
              <br />
              <br />
              <Button
                className="btn btn-sm pro"
                type="button"
                onClick={() => clearErrors(["password"])}
              >
                Clear Errors
              </Button>
            </fieldset>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ReactHookFormApi;
