const form = document.querySelector("form"); // adicionando o form ao DOM
const listaTarefas = document.getElementById("listaTarefas"); //Adicionando a UL ao DOM pela ID
const arrayTarefas = []; //criando a Array de Tarefas

form.addEventListener("submit", (e) => {
  e.preventDefault(); // previnindo que a página de F5
  const tarefa = form.tarefas.value; // Pegando o valor inserido pelo Usuário
  arrayTarefas.push(tarefa); // Adicionando o valor na Array
  let liTarefas = document.createElement("li"); // Criandoo Li para conter nossa Array
  const checkButton = document.createElement("button"); // botão de checagem de conclusão de tarefa
  checkButton.textContent = "Concluir";
  const delButton = document.createElement("button");
  delButton.textContent = "Deletar";
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  function concluirButton() {
    liTarefas.classList.toggle("green");
  }

  if (tarefa === "") {
    alert("Não tem nada escrito bonitão."); // Condição caso não tenha nada escrito
    return;
  }
  //Estrutura de repetição para renderização da Tarefa no Navegador Web (e na lista)
  for (let i = 0; i < arrayTarefas.length; i++) {
    liTarefas.innerText = [i + 1] + " - " + arrayTarefas[i];

    function deletarButton() {
      arrayTarefas.splice(i, 1);
      liTarefas.innerHTML = "";
    }
    function editar() {
      let editado = prompt("Insira uma nova tarefa: ");
      arrayTarefas[i] = editado;
      liTarefas.innerHTML = "";
      liTarefas.innerText = [i + 1] + " - " + arrayTarefas[i];
      liTarefas.appendChild(delButton);
      liTarefas.appendChild(checkButton);
      liTarefas.appendChild(editButton);
    }
  }
  liTarefas.appendChild(delButton);
  liTarefas.appendChild(checkButton);
  liTarefas.appendChild(editButton);
  listaTarefas.appendChild(liTarefas); // Inserindo a LI dentro da UL
  form.tarefas.value = ""; // "zerando" o valor do formulário para facilitar a inserção de novos valores
  form.tarefas.focus(); // Foco ;)
  editButton.addEventListener("click", () => editar(liTarefas));
  delButton.addEventListener("click", () => deletarButton(liTarefas));
  checkButton.addEventListener("click", () => concluirButton(liTarefas));
});
//Funções
//Metodos de Inicialização
//Variaveis Globais
