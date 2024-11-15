##  Jak uruchomić program

Aby uruchomić ten program w pierwszym kroku potrzeba utworzyć plik .env i wpisać w nim klucz do OpenAI.
Klucz należy wpisać w OPEN_AI_KEY= klucz.

Następnie należu użyć poleceń:
    npm install
    node main.js

Po tym aplikacja się uruchomi.

## Jak działa aplikacja?

Aplikacja w pierwszej kolejności czyta zawartość pliku articleText.txt.
Następnie aplikacja łączy się z OpenAI w celu wygenerowania kodu HTML który zostanie zapisany do pliku "artykul.html".
HTML będzie zawierać tylko strukturę którą można umieścić w tagach <body> *Wygenerowany HTML* </body>.

W zależności od zawartości pliku articleText.txt wygenerowany HTML może się różnić.
