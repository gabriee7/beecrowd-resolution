# <a href="https://www.beecrowd.com.br/judge/pt/problems/view/1045"> Bee 1045</a> 🐝

Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
<ul>
    <li>se A ≥ B+C, apresente a mensagem: <strong>NAO FORMA TRIANGULO</strong></li>
    <li>se A2 = B2 + C2, apresente a mensagem: <strong>TRIANGULO RETANGULO</strong></li>
    <li>se A2 > B2 + C2, apresente a mensagem: <strong>TRIANGULO OBTUSANGULO</strong></li>
    <li> A2 < B2 + C2, apresente a mensagem: <strong>TRIANGULO ACUTANGULO</strong></li>
    <li>se os três lados forem iguais, apresente a mensagem: <strong>TRIANGULO EQUILATERO</strong></li>
    <li>se apenas dois dos lados forem iguais, apresente a mensagem: <strong>TRIANGULO ISOSCELES</strong></li>
</ul>


### Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

### Saída
Imprima todas as classificações do triângulo especificado na entrada.


| Exemplos de Entrada | Exemplos de Saída|
|---| ---|
|7.0 5.0 7.0| TRIANGULO ACUTANGULO<br>TRIANGULO ISOSCELES|
|6.0 6.0 10.0| TRIANGULO OBTUSANGULO<br>TRIANGULO ISOSCELES|
|6.0 6.0 6.0| TRIANGULO ACUTANGULO<br>TRIANGULO EQUILATERO|
|5.0 7.0 2.0| NAO FORMA TRIANGULO|
|6.0 8.0 10.0| 	TRIANGULO RETANGULO|

