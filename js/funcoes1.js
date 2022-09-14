function exibirCPF(param) {
    alert("O CPF é " + param);
  }
  function mascaraCPF(param) {
    let d = param.split("");
    let cpfComMascara =
      d[0] +
      d[1] +
      d[2] +
      "." +
      d[3] +
      d[4] +
      d[5] +
      "." +
      d[6] +
      d[7] +
      d[8] +
      "-" +
      d[9] +
      d[10];
    return cpfComMascara;
  }

  function verificarCPF(param) {
    const total = param.length === 11;
    if (param.length === 11) {
      return true;
    } else {
      return false;
    }
  }

  let CPFDigitado = prompt("Digite o seu CPF ");
  let cpfValido = verificarCPF(CPFDigitado);
  if (cpfValido) {
    let cpfFormatado = mascaraCPF(CPFDigitado);
    exibirCPF(cpfFormatado);
  }
