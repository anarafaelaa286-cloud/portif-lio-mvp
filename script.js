const projetos = [
  {
    nome: "Sereias Shopee 🛍️",
    descricao: "Perfil de achadinhos com estratégia de vendas.",
    link: "#"
  },
  {
    nome: "Landing Page",
    descricao: "Página para divulgação de produtos.",
    link: "#"
  },
  {
    nome: "Meu Portfólio",
    descricao: "Projeto desenvolvido com HTML, CSS e JS.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">
      <i class="fas fa-link"></i> Ver projeto
    </a>
  `;

  container.appendChild(card);
});