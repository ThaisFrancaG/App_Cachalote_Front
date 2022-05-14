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
      if (formInfo.checkEmail) {
        if (formInfo.checkEmail !== formInfo.email) {
          errorMessage = "E-mail deve ser repetido corretamente";
        }
      }

      if (formInfo.password.length <= 6) {
        errorMessage = "Seha deve ter no mínimo 6 caractéres";
      }
    }
  });

  return errorMessage;
}
