# Lidando com bibliotecas de terceiros: Calendários!
https://fullcalendar.io/

### Tarefas:
<p><1) Ao clicar em uma determinada data do calendário, será chamada a função processarDataClicada(), que receberá os parametros informados no código.</p>
<p><2) Dai queremos saber qual o signo da data clicada, seguindo a lógica:</p>

#### Regras:
Áries: 21 de março a 19 de abril<br>
Touro: 20 de abril a 20 de maio<br>
Gêmeos: 21 de maio a 20 de junho<br>
Câncer: 21 de junho a 22 de julho<br>
Leão: 23 de julho a 22 de agosto<br>
Virgem: 23 de agosto a 22 de setembro<br>
Libra: 23 de setembro a 22 de outubro<br>
Escorpião: 23 de outubro a 21 de novembro<br>
Sagitário: 22 de novembro a 21 de dezembro<br>
Capricórnio: 22 de dezembro a 19 de janeiro<br>
Aquário: 20 de janeiro a 18 de fevereiro<br>
Peixes: 19 de fevereiro a 20 de março<br><br>

Um exemplo de verificação seria:

```js
if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        console.log("Áries");
}
```
Lembre-se de que o mês será recebido como "01", do tipo string, logo, você precisa converter para parseInt para garantir que seja considerado como número inteiro.

<p>3) O resultado do signo, será impresso na div #resultadoSigno, use o jQuery para selecionar o elemento HTML para a impressão (ver exercícios anteriores)</p>


### Bônus
<p>Pode ser problemático usar vários IFs encadeados, para tanto, temos o função JS chamada switch. Leia a documentação abaixo e busque entender como ela funciona. A ideia é você substituir os IFs pelo uso de um Switch</p>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

https://www.devmedia.com.br/javascript-switch/39761

https://awari.com.br/como-utilizar-o-switch-case-em-javascript-guia-completo/

https://www.dio.me/articles/a-funcao-switch-case-em-javascript-uma-analise-detalhada

https://www.youtube.com/watch?v=Og12uQUuAog
