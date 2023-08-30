let ctx = document.getElementById('grafico_linha');
Chart.defaults.borderColor = 'white';
Chart.defaults.color = 'white';
Chart.defaults.font.size = 21;
Chart.defaults.font.family = 'Segoe UI';
Chart.defaults.font.weight = 'bold';

const labels = ['5° Ano Incompleto','5° Ano Completo', '6° ao 9° Ano Incompleto', 'Ensino Médio Incompleto','Ensino Médio Completo','Fundamental Completo','Superior completo', 'Analfabeto'];

const data = {
    labels,
    datasets: [{
        data: [138, 66, 137, 58, 80, 69, 69, 76],
        label: 'Escolaridade dos resgatados residentes na UF',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1
    }],
}

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {}
});



let ctx2 = document.getElementById('grafico_linha2');
// Note que aqui eu criei um novo objeto Chart.defaults para o segundo gráfico
let chartDefaults2 = {
    borderColor: 'white',
    color: 'white',
    font: {
        size: 21,
        family: 'Segoe UI',
        weight: 'bold'
    }
};

// Chart.defaults2 = chartDefaults2;

// const labels2 = ['5° Ano Incompleto','5° Ano Completo', '6° ao 9° Ano Incompleto', 'Ensino Médio Incompleto','Ensino Médio Completo','Fundamental Completo','Superior completo', 'Analfabeto'];

// const data2 = {
//     labels: labels2,
//     datasets: [{
//         data: [138, 66, 137, 58, 80, 69, 69, 76],
//         label: 'Escolaridade dos resgatados residentes na UF',
//         backgroundColor: 'white',
//         borderColor: 'white',
//         borderWidth: 1
//     }],
// }

// const chart2 = new Chart(ctx2, {
//     type: 'line',
//     data: data2,
//     options: {}
// });