# <a href="https://www.beecrowd.com.br/judge/pt/problems/view/1021"> Bee 1021</a> 🐝

Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.


### Entrada
O arquivo de entrada contém um valor de ponto flutuante <strong>N</strong> (0 ≤ <strong>N</strong> ≤ 1000000.00).

### Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.


| Exemplos de Entrada | Exemplos de Saída|
|---| ---|
| 576.73| 	NOTAS:<br>5 nota(s) de R$ 100.00<br>1 nota(s) de R$ 50.00<br>1 nota(s) de R$ 20.00<br>0 nota(s) de R$ 10.00<br>1 nota(s) de R$ 5.00<br>0 nota(s) de R$ 2.00<br>MOEDAS:<br>1 moeda(s) de R$ 1.00<br>1 moeda(s) de R$ 0.50<br>0 moeda(s) de R$ 0.25<br>2 moeda(s) de R$ 0.10<br>0 moeda(s) de R$ 0.05<br>3 moeda(s) de R$ 0.01 |
| 4.00 |NOTAS:<br>0 nota(s) de R$ 100.00<br>0 nota(s) de R$ 50.00<br>0 nota(s) de R$ 20.00<br>0 nota(s) de R$ 10.00<br>0 nota(s) de R$ 5.00<br>2 nota(s) de R$ 2.00<br>MOEDAS:<br>0 moeda(s) de R$ 1.00<br>0 moeda(s) de R$ 0.50<br>0 moeda(s) de R$ 0.25<br>0 moeda(s) de R$ 0.10<br>0 moeda(s) de R$ 0.05<br>0 moeda(s) de R$ 0.01|
|91.01|NOTAS:<br>0 nota(s) de R$ 100.00<br>1 nota(s) de R$ 50.00<br>2 nota(s) de R$ 20.00<br>0 nota(s) de R$ 10.00<br>0 nota(s) de R$ 5.00<br>0 nota(s) de R$ 2.00<br>MOEDAS:<br>1 moeda(s) de R$ 1.00<br>0 moeda(s) de R$ 0.50<br>0 moeda(s) de R$ 0.25<br>0 moeda(s) de R$ 0.10<br>0 moeda(s) de R$ 0.05<br>1 moeda(s) de R$ 0.01|