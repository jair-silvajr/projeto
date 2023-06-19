function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 
  EFEITO DE ATIVAR E DESATIVAR O BOTÃO LIGHT MODE */

  html.classList.toggle("light")
  /* maneira mais facil de executar o código obs: tag toggle ja faz a função meio parecida removendo o light que adicionamos a nosso html */
}
