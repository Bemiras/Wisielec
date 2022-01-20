# Wisielec

Gra dostępna pod adresem: https://bemiras.github.io/Wisielec/

Użyte technologie: JavaScript i CSS

Z bazy polskich przysłów losowo wybierane jest hasło do odgadniecia.
Po wyborze litery sprawdzane jest jej występowanie w odgadywanym haśle.

Gdy litera jest prawidłowa:
* w zgadywanym haśle odsłania się miejsca z tą literą
* litera podświetla się na zielono

Gdy litera jest nieprawidłowa:
* liczba prób jest zmniejszana (max 12 nieprawidłowych prób)
* do grafiki dodawany jest kolejny element 
* litera podświetla się na czerwono

Koniec gry następuje gdy gracz prawidłowo odgadnie hasło lub wybierając nieprawidłowe litery przekroczy liczbę prób w grze.
