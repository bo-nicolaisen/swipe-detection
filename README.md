# swipe-detection

swipe detection based on pointer API

Denne kode lytter efter pointerhændelser på det specificerede HTML-element og bruger handleTouchStart-funktionen til at sætte den indledende berøringsposition. handleTouchMove-funktionen beregner derefter forskellen mellem den indledende berøringsposition og den aktuelle berøringsposition for at afgøre, om der er sket en vandret swipe-gesture. Hvis der registreres en vandret swipe, logger koden en besked til konsollen, der angiver, om swipe'et var til venstre eller højre.
