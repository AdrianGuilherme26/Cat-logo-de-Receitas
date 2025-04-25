// a) Função swap:
const swap = (vetor, i, j) => {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};

// b) Função shuffle:
const shuffle = (vetor, qtdTrocas) => {
    const len = vetor.length;
    for (let i = 0; i < qtdTrocas; i++) {
        const pos1 = Math.floor(Math.random() * len);
        const pos2 = Math.floor(Math.random() * len);
        swap(vetor, pos1, pos2);
    }
};

// c) Função bubble_sort:
const bubble_sort = (vetor) => {
    const len = vetor.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort:
const selection_sort = (vetor) => {
    const len = vetor.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
};

// e) Função quick_sort:
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivotIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
};

// f) Função particionamento:
const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};
