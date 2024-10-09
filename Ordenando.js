// Função para trocar dois valores de posição no vetor
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// Função para embaralhar os valores da lista
const shuffle = (arr, times) => {
    for (let i = 0; i < times; i++) {
        let j = Math.floor(Math.random() * arr.length);
        let k = Math.floor(Math.random() * arr.length);
        swap(arr, j, k);
    }
    return arr;
};

// Algoritmo Bubble Sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// Algoritmo Selection Sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
};

// Algoritmo Quick Sort
const quick_sort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};

// Função de particionamento para Quick Sort
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// Função ordenar
function ordenar() {
    let lista = document.getElementById('valores');
    let algoritmo = document.getElementById('algoritmo').value;

    let vetor = Array.from(lista.children).map(li => parseInt(li.innerHTML));
    
    // Escolher o algoritmo com base na seleção
    if (algoritmo === 'bubble_sort') {
        vetor = bubble_sort(vetor);
    } else if (algoritmo === 'selection_sort') {
        vetor = selection_sort(vetor);
    } else if (algoritmo === 'quick_sort') {
        vetor = quick_sort(vetor);
    }

    // Atualizar a lista com os valores ordenados
    lista.innerHTML = vetor.map(val => `<li class="list-group-item">${val}</li>`).join('');
}

// Função misturar
function misturar() {
    let lista = document.getElementById('valores');
    let vetor = Array.from(lista.children).map(li => parseInt(li.innerHTML));

    shuffle(vetor, 10);

    // Atualizar a lista com os valores misturados
    lista.innerHTML = vetor.map(val => `<li class="list-group-item">${val}</li>`).join('');
}
