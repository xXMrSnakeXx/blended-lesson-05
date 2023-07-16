import React from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { selectRate } from "../../redux/selectors";
import { getConvert } from "../../services/apilayerApi";
import { Button, Input, Label, Wrapper } from "./FormConvert.styled";

const FormConvert = () => {
  const userCurrencyFrom = useSelector(selectRate);
  return (
    <Wrapper>
      <Formik
        initialValues={{ from: userCurrencyFrom, to: "", amount: "" }}
        onSubmit={({ from, to, amount }) => {
          getConvert(from, to, amount);
        }}
      >
        <Form>
          <Label>
            Current Currency
            <Input type="text" name="from" />
          </Label>
          <Label>
            Future Currency
            <Input type="text" name="to" />
          </Label>
          <Label>
            Amount
            <Input type="text" name="amount" />
          </Label>

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default FormConvert;
