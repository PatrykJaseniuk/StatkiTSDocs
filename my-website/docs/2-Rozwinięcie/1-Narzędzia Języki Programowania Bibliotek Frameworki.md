---
sidebar_position: 1
---

# Narzędzia, Języki Programowania, Biblioteki, Frameworki

## Języki Programowania
Język Programowania definiuje kształt pliku.
Jeżeli zawartość piliku jest zrozumiała przez interpreter/kompilator jakiegoś języka to ta zawartość jest napisana w tym języku.

### TypeScript
[TypeScript](https://www.typescriptlang.org/)
jest to główny język tego projektu. Wybrałem właśnie ten język, ponieważ umożliwia on kompilację do JavaScript. Systemy napisane w JS posiadają najlepszą przenośność pomiędzy urządzeniami, wystarczy, że maszyna posiada przeglądarkę internetową. Kolejną zaleta TS jest obchodzenie się z funkcjami. W TS `function` jest `first-class citizen`,to znaczy, że można ją przypisywać do zmiennych/stałych przesyłać do funkcji i zwracać z funkcji tak samo wygodnie, jak dane/wartości np. `string`, `number`, `object`. Kolejną wygodną rzeczą jest [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), która umożliwia definiowanie funkcji w dowolnym miejscu z możliwością odwołania się do wszystkich elementów języka w przestrzeni nazw, w której zastała zdefiniowana. Wadą Systemów napisanych w JS jest np. mniejsza wydajność w porównaniu, np. do C++.

### React 
[React](https://pl.react.dev/)
Nie korzystałem zbyt wiele z React w tym projekcie. Umożliwia on w wygodny sposób definiowanie wyglądu strony za pomocą drzewa komponentów React (coś jak klasy, albo funkcje), zamiast drzewa statycznych elementów html. Dzięki temu wygląd końcowy poszczególnych komponentów jest dynamiczny i zależy od różnych argumentów: np. globalny stan aplikacji, argument przesłany przez rodzica, albo odpowiedz uzyskana z zewnętrznego serwera. Pliki w języku react występuje w dwóch odmianach: `.jsx` i `.tsx`. Pierwszy jest na bazie JS, drugi na bazie TS. W tym projekcie używam tylko `.tsx`.

### Jest
Język testów interpretowany przez `Jest` jest na bazie TS/JS  znajduje się w plikach z rozszerzeniem `test.ts`

## Frameworki
Framework Definiuje kształt katalogu.
Jeżeli zawartość katalogu jest zrozumiała dla interpretera danego frameworka to ten katalog jest skonstruowany w tym frameworku. Framework jest jak język programowania, ale na poziomie katalogu.

### Next.js
[Next.js](https://nextjs.org/)
Framework do tworzenia aplikacji webowych w React. Umożliwia on tworzenie aplikacji w sposób podobny do tworzenia aplikacji w React, ale dodaje kilka udogodnień, np. automatyczne ładowanie komponentów, które są potrzebne w danym momencie, a nie wszystkich na raz. Umożliwia on również łatwe tworzenie stron statycznych, które są ładowane szybciej niż strony dynamiczne. W tym projekcie używam Next.js do tworzenia stron statycznych. Zajmuje się też kompilacją TS do JS, oraz optymalizacją kodu JS.

### Jest
[Jest](https://jestjs.io/)

## Biblioteki 
Biblioteka to użyteczny kod, który służy do określonego celu zapisany w jakimś języku programowania.

### ThreeJS
[ThreeJs](https://threejs.org/) biblioteka napisana w js/ts, stanowiąca 'wraper' dla [web GL](https://pl.wikipedia.org/wiki/WebGL) ,umożliwia w wygodny sposób tworzenie i manipulację elementami 3D na elemencie Canva z HTML5. Ten projekt co prawda przedstawia dwuwymiarowy model świata, ale zdecydowałem się na taką bibliotekę zamiast np [pixiJS](https://pixijs.com/) ponieważ TJs jest bardziej popularny, posiada dużą bazę przykładów, i wbudowaną bibliotekę umożliwiającą dokonywanie operacji na wektorach. 

### Material UI
[Material UI](https://material-ui.com/)
Biblioteka komponentów React, która umożliwia tworzenie stron w stylu [Material Design](https://material.io/design). 

### detect-collisions
[detect-collisions](https://www.npmjs.com/package/detect-collisions)
To biblioteka napisana w języku TS umożliwiająca detekcję kolizji pomiędzy obiektami. Zaimplementowałem system kolizji z wykorzystaniem tej biblioteki niestety nie jest dostatecznie wydajny, więc kod który wywołuję funkcję uruchamiającą systemem kolizji jest //zakomentowany .

## Narzędzia
Narzędzia służą do generowania i przetwarzania zawartości plików jak i całych katalogów. 

### VS Code
[VS Code](https://code.visualstudio.com/)
Najważniejsze narzędzie które służy do edycji zawartości plików w formie tekstowej. Ponadto posiada wbudowane, lub możliwe do dodania, interpretery różnych języków programowania, które umożliwiają wydajną prace programisty. Dzięki temu na bieżąco wiadomo gdzie występuje błąd językowy, albo do jakiej nazwy możemy się odwołać w bieżącej przestrzeni nazw. Ponadto umożliwia szybkie poruszanie się w kodzie pomiędzy odwołaniami (np z wywołania funkcji do definicji), albo dodaje możliwość refaktoryzacji kodu (np. zdefiniowanie metody, której jeszcze niema, ale już napisaliśmy do niej odwołanie).  

### NPM
[npm](https://www.npmjs.com/) to połączenie: 
1. [menadżera pakietów](https://en.wikipedia.org/wiki/Package_manager), który działa na maszynie dewelopera
2. serwer repozytoriów przechowujący pakiety do pobrania przez menadżera pakietów.

System informatyczny można przedstawić jako graf zależnych od siebie elementów (pakietów). Do poprawnego działania system potrzebuje dostępu do wszystkich elementów. Menadżer pakietów dba o to aby system posiadał wszystkie potrzebne elementy(pakiety). Potrzebne pakiety programista definiuje w pliku `package.json` . Po wywołaniu `npm install` npm doda do system (naszego katalogu) żądane pakiety i pakiety od których te pakiety zależą itd... . Dzięki temu np. nie powielają się pakiety, które już zostały pobrane. 

### GIT
[git](https://git-scm.com/) to zdecentralizowany system kontroli wersji, który pierwotnie powstał na potrzeby tworzenia i rozwoju systemu operacyjnego Linux. Jest to obecnie najbardziej popularny SKW. Pomimo że ten program jest pisany przez jedną osobę i tak jest bardzo użyteczny, ponieważ umożliwia zapisywanie stanu systemu w formie `commits` i w razie potrzeby wczytanie `checkout` poprzedniego działającego stanu. `commits` można grupować w `branches` a po osiągnięciu pożądanego rezultatu `branches` mogą być połączone ze sobą `merge`. W połączeniu z zewnętrznym serwerem współpracującym z git, mogę dokonać kopi zapasowej. Jako zewnętrzny serwer git korzystam z [GitHub](https://github.com/) . Serwis GitHub umożliwia upublicznienie swojego repozytorium  ,a także  ułatwia współprace wielu osób nad jednym projektem informatycznym w ramach [Integration Manager Workflow](https://git-scm.com/about/distributed) GitHub oprócz serwera repozytorium git posiada serwer stron statycznych i udostępnia maszynę wirtualna w ramach [Github Actions](https://github.com/features/actions) Dzięki czemu możliwe jest zautomatyzowanie z repozytorium generowania i deponowania gotowej strony/aplikacji na ich serwerze.  
```
GH repozyorium --> GH Actions --> aplikacja dostępna w internecie 
```

### GitHub Copilot / Codex
[Codex](https://openai.com/blog/openai-codex) To [model językowy](https://en.wikipedia.org/wiki/Language_model) zoptymalizowany pod kontem języków programowania. Korzysta z niego rozszerzenie do VS Code o nazwie [GitHub CoPilot](https://github.com/features/copilot) . GHCP Generuje nieustannie sugestie na podstawie wcześniejszego kodu w pliku, a także na podstawie komentarzy, akceptuje się za pomocą  `tab`. Jest bardzo użyteczny w sytuacji gdy korzystamy z nieznanej, ale popularnej biblioteki programistycznej (np. testy w Jest), lub chcemy napisać ciało jakiejś znanej funkcji np `bubbleSort(arr)`, ale i bardziej złożonych, albo ostylować jakiś komponent, a nie znamy `css`.

#### Przykłady przydatnych propozycji:
+ Wyznaczenie wektora prostopadłego do danego.
```
const botomEdge = this.positions[1].value.clone().sub(this.positions[2].value);
const ortoganalToBotomEdge = new Vector2(-botomEdge.y, botomEdge.x); // GPT proposition
```

+ funkcja która ustawia obrót obiekt składający się z trzech punktów. Wszystko posiada specyficzną strukturę danych a mimo to model wygenerował poprawny kod za jednym zamachem. 
``` ts
//GPT proposition
setRotation(rotation: number) {
const positionRotation = this.getPositionRotation();
const rotationDifference = rotation - positionRotation.rotation;
const rotationMatrix = new Vector2(Math.cos(rotationDifference), Math.sin(rotationDifference));
this.positions[0].value.sub(positionRotation.position.value);
this.positions[1].value.sub(positionRotation.position.value);
this.positions[2].value.sub(positionRotation.position.value);  

this.positions[0].value = new Vector2(this.positions[0].value.x * rotationMatrix.x - this.positions[0].value.y * rotationMatrix.y, this.positions[0].value.x * rotationMatrix.y + this.positions[0].value.y * rotationMatrix.x);
this.positions[1].value = new Vector2(this.positions[1].value.x * rotationMatrix.x - this.positions[1].value.y * rotationMatrix.y, this.positions[1].value.x * rotationMatrix.y + this.positions[1].value.y * rotationMatrix.x);
this.positions[2].value = new Vector2(this.positions[2].value.x * rotationMatrix.x - this.positions[2].value.y * rotationMatrix.y, this.positions[2].value.x * rotationMatrix.y + this.positions[2].value.y * rotationMatrix.x);  

this.positions[0].value.add(positionRotation.position.value);
this.positions[1].value.add(positionRotation.position.value);
this.positions[2].value.add(positionRotation.position.value);
}
```