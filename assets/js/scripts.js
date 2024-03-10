// INICIALIZAR O CALENDÁRIO
document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendario');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                locale: 'pt', // Configura o FullCalendar para usar a localização em português
                dateClick: function(info) {
                    // Formata a data clicada no formato dd/mm/yyyy
                    var dataClicada = info.dateStr.split('-').reverse().join('/');

                    var dia = info.dateStr.split('-')[2];
                    var mes = info.dateStr.split('-')[1];
                    var ano = info.dateStr.split('-')[0];

                    // Chama a função callEventos com a data clicada como argumento
                    processarDataClicada(dataClicada,dia, mes, ano);
                }
            });
            calendar.render();
});


// FUNÇÃO PERSONALIZADA QUE RECEBE
// data = DATA COMPLETA, EXEMPLO 01/01/2024
// dia  = 01 
// mes  = 01
// ano  = 2024
function processarDataClicada(data, dia, mes, ano){


    // COLOQUE SUA LÓGICA DE PROCESSAMENTO AQUI

            
}