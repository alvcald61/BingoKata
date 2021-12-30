# BingoKata
***
# Clases 

### BingoCaller 
    Se usa para obtener numeros de 1-75 aleatoreamente sin repetidos llamando al metodo  getNumber()
    complejidad de getNumber O(n) 

### BingoCard
    Se usa para generar una tarjeta de bingo. 
####  Metodos
* getCard(): Devuelve a tarjeta (debe ser generada previamente). Complejidad: O(1).
* generateCard(): Genera una tarjeta de bingo de tamaño 5x5 con un espacio en lleno al medio. Complejidad: O(n*m) donde n = numero de columnas, m = numero de filas, en este caso esta fijado en 5x5.
* checkNewNumber(number): Verifica si la tarjeta de bingo tiene el numero pasado por parametro (este deberia ser generado con getNumber de BingoCaller). Si se encuentra se tacha de la tarjeta. . Complejidad: O(m) donde m=numero de filas.
*checkForWinner(): Verifica si la tarjeta es ganadora. Debe tener todos los numeros tachados ("-"). Si es ganadora devuelve true, sino fals. Complejidad: O(m\*n\*n) donde m= numero de filas n = numero de columnas (esto por el uso de find()).