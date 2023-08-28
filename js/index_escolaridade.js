let ctx = document.getElementById('grafico_linha')

//Configuração Gráfico
//Grafico 1
Chart.defaults.borderColor = 'white'
Chart.defaults.color = 'white'
Chart.defaults.font.size = 21
Chart.defaults.font.family = 'Segoe UI'
Chart.defaults.font.weight = 'bold'

const labels = ['5° Ano Incompleto','5° Ano Completo', '6° ao 9° Ano Incompleto', 'Ensino Médio Incompelto','Ensino Médio Completo','Fundamental Completo','Superior Incompleto','Superior Completo']

const data = {
    labels,
    datasets: [{
        data: [207, 90, 196, 96, 110, 103,4,1 ],
        label: 'Escolaridade dos resgatados residentes na UF',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1
    }],
}

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      // Aqui você pode adicionar opções adicionais de configuração do gráfico, se necessário
    }
  });




 