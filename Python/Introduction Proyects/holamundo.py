# print("Hello world!")

import random

def intro():
    print("===================================")
    print("    🎲 JUEGO: ADIVINA EL NÚMERO 🎲 ")
    print("===================================")
    print("He elegido un número entre 1 y 100.")
    print("¿Puedes adivinar cuál es? ¡Tienes 10 intentos!\n")

def jugar():
    numero_secreto = random.randint(1, 100)
    intentos = 10

    while intentos > 0:
        try:
            guess = int(input(f"Intento {11 - intentos}/10 - Ingresa tu número: "))
        except ValueError:
            print("❌ Eso no es un número válido. Intenta otra vez.\n")
            continue

        if guess < 1 or guess > 100:
            print("⚠️ El número debe estar entre 1 y 100.\n")
            continue

        if guess == numero_secreto:
            print(f"🎉 ¡Felicidades! Adivinaste el número {numero_secreto} correctamente.\n")
            break
        elif guess < numero_secreto:
            print("🔼 El número secreto es mayor.\n")
        else:
            print("🔽 El número secreto es menor.\n")

        intentos -= 1

    if intentos == 0:
        print(f"💥 Se acabaron los intentos. El número era {numero_secreto}.\n")

#Hola Mundo!
if __name__ == "__main__":
    intro()
    jugar()