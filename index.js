const botaoDoConselho = document.querySelector(".advice-update");
const idDoConselho = document.querySelector(".advice-id");
const descricaoDoConselho = document.querySelector(".advice-description");

async function tirarConselhoAleatorio() {
      const url = "https://api.adviceslip.com/advice"
      const resposta = await fetch(url)
      const conteudoDoConselho = await resposta.json()
      const idDoConselho = `Advice #${conteudoDoConselho.slip_id}`;
      const textoDoConselho = `"${conteudoDoConselho.slip.advice}"`;

      idDoConselho.innerHTML = idDoConselho
      descricaoDoConselho.innerHTML = textoDoConselho

}

botaoDoConselho.addEventListener("click", tirarConselhoAleatorio);
tirarConselhoAleatorio()


