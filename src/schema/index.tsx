import * as Yup from "yup";
import { parse, isDate } from "date-fns";
import YupPassword from "yup-password";

YupPassword(Yup);

function parseDateString(value: any, originalValue: any) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, "dd-MM-yyyy", new Date());
    console.log(parsedDate);
    return parsedDate;
  }

  const today = new Date();
  export const SignupSchema = Yup.object().shape({
    full_name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    date_of_birth: Yup.date()
      .transform(parseDateString)
      .max(today)
      .required("Campo obrigatório")
      .typeError("Data inválida"),
    phone: Yup.string()
      .min(13, "Número muito curto")
      .max(15)
      .required("Campo obrigatório")
      .typeError("Telefone inválido"),
    cpf: Yup.string()
      .min(13, "Cpf muito curto")
      .required("Campo obrigatório")
      .typeError("Cpf inválido"),
    password: Yup.string()
      .min(8, "Senha com menos de 8 digitos")
      .required("Campo obrigatório")
      .typeError("Senha inválida")
      .minLowercase(1, "Sua senha deve conter letras minúscula e números")
      .minNumbers(1, "Sua senha deve conter letras minúsculas e números"),
  });

  export const SigninSchema = Yup.object().shape({
    password: Yup.string()
      /* .min(8, "Senha com menos de 8 digitos!") */
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });