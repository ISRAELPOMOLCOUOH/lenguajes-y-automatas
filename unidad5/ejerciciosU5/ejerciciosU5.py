# -*- coding: utf-8 -*-
import re

documento = "condicionales.py"

try:
    archivo = open(documento,'r')
except:
    print("el archivo que intenta abrir no existe")
    quit()

texto =""

for linea in archivo:
    texto+=linea

# 	Sentencia de asignación. Ejemplo: suma = 0, factorial = 1, vidas = cont, etc.
patron = r"\w+\s*\=\s*\w+"
resultado = re.findall(patron,texto)
print("resultado sentencias de asignacion: ",resultado,)
print("")

# 	Operaciones aritméticas básicas. Ejemplo: suma = 2.7 + 3, cont = cont + 1, etc. 
patron = r"[a-zA-Z]+\s*\=\s*\w+.?\d*\s*[*|+|/|-]\s*\w+.?\d*"
resultado = re.findall(patron,texto)
print("Resultado operaciones aritmeticas basicas: ",resultado)
print("")

# 	Expresiones booleanas básicas. Ejemplo: edad >= 5, suma != 0, etc.
patron = r"\w+.?\d*\s*[<|>|!]{1}\=?\s*\w+.?\d*"
resultado = re.findall(patron,texto)
print("Resultado expresiones booleanas basicas: ",resultado)
print("")

# 	Formulas más complejas del tipo c = a op ( b op d)              c = b * (5*5)   result = num4 * (4 + 5)
patron = r"\w+\s*\=\s*\w+.?\d*\s*[*|+|/|-]\s*[(]{1}\w+.?\d*\s*[*|+|/|-]\s*\w+.?\d*[)]"
resultado = re.findall(patron,texto)
print("Resultado formulas complejas: ",resultado)


# 	El encabezado de estructura de control. if, while, for, etc.
patron = r"(if|while)\s*(\w+.?\d*\s*[<|>|!|=]{1}\=?\s*\w+.?\d*.*)+\:"
resultado = re.findall(patron,texto)
pat2 = r"(for)\s*([a-zA-Z]+\s*\in\s*[a-zA-Z]+)\:"
res = re.findall(pat2,texto)
pat3 = r"(for)\s*([a-zA-Z]+\s*\in\s*range[(]\w+.?\w+[)])\:"
res3 = re.findall(pat3,texto)
print("Resultado encabezado estructuras de control: ",resultado,res,res3)
