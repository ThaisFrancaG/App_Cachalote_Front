interface FormInfo {
  name?: string;
  email: string;
  checkEmail?: string;
  password: string;
}

export default function CheckForm(formInfo: FormInfo) {
  let errorMessage = "";
  const myObject: FormInfo = formInfo;

  Object.keys(formInfo).forEach((key) => {
    const checkNull = myObject[key as keyof typeof myObject];

    if (!checkNull) {
      errorMessage = "Por favor, preencha todos os dados antes de continuar";
    } else {
      const regexEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/;
      const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}/;
      if (!regexEmail.test(formInfo.email)) {
        errorMessage = "Por favor, insira e-mail de formato válido";
      }
      if (formInfo.checkEmail) {
        if (formInfo.checkEmail !== formInfo.email) {
          errorMessage = "E-mail deve ser repetido corretamente";
        } else if (!regexPassword.test(formInfo.password)) {
          errorMessage =
            "Senha deve ter no mínimo 6 caracteres e conter ao menos um número";
        }
      }
    }
  });

  return errorMessage;
}
