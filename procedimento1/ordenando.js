// Swap
const swap = (arr, posicao1, posicao2) => { 
    const temp = arr[posicao1]; 
    arr[posicao1] = arr[posicao2]; 
    arr[posicao2] = temp; 
  };
  
  // Shuffle
  const shuffle = (arr, swaps) => { 
    for (let i = 0; i < swaps; i++) { 
      const pos1 = Math.floor(Math.random() * arr.length); 
      const pos2 = Math.floor(Math.random() * arr.length); 
      swap(arr, pos1, pos2); 
    }
  };
  
  // Bubble_sort
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // Selection_sort
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        swap(arr, i, min);
      }
    }
  };
  
  // Quick_sort
  const quick_sort = (arr, left, right) => {
    if (left < right) {
      const pivot = partition(arr, left, right);
      quick_sort(arr, left, pivot - 1);
      quick_sort(arr, pivot + 1, right);
    }
  };
  
  // Partition
  const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, right);
    return i + 1;
  };
  
  function add() {
    var valor = Number(document.getElementById("valor").value);
    if (valor != "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(valor));
      li.classList.add("valor");
      document.getElementById("valores").appendChild(li);
    }
    document.getElementById("valor").value = "";
  }

  function ordenar() {
      let lista = document.getElementById("valores");
      let vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));
      let algoritmo = document.getElementById("algoritmo").value;
      switch (algoritmo) {
          case "bubbleSort":
              bubble_sort(vetor);
              break;
          case "selectionSort":
              selection_sort(vetor);
              break;
          case "quickSort":
              quick_sort(vetor, 0, vetor.length - 1);
              break;
      }
      let novosItens = vetor.map(item => "<li>" + item + "</li>").reduce((anterior, atual) => anterior + atual);
      lista.innerHTML = novosItens;
  }

  function misturar() {
      let lista = document.getElementById("valores");
      let vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));
      shuffle(vetor, 10);
      let novosItens = vetor.map(item => "<li>" + item + "</li>").reduce((anterior, atual) => anterior + atual);
      lista.innerHTML = novosItens;
  }

function handleKeyDown(event) {
  if (event.key === 'Enter') {
      add();
  }
}

