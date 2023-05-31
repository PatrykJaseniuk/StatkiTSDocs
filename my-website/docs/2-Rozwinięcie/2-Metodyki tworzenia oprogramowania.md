---
sidebar_position: 2
---

# Metodyki tworzenia oprogramowania

W procesie powstawania oprogramowania wykorzystuje dwie metodyki:
1.  [eXtreme Programming, XP](https://en.wikipedia.org/wiki/Extreme_programming)
2. [CI/CD](https://en.wikipedia.org/wiki/CI/CD)

## eXtreme Programing

Ta metodyka zakłada powstawanie systemu w sposób iteracyjny, organiczny. Cel końcowy projektu nie jest bardzo ściśle określony, ewoluuje w trakcie tworzenia, jest elastyczny.

### Najważniejsze cechy

#### Iteratywność

[Program](https://pl.wikipedia.org/wiki/Oprogramowanie "Oprogramowanie") tworzy się w iteracjach (krótkie, przyrostowe kroki programistyczne) – i co ważniejsze – planuje tylko następną iterację. Efektem każdej iteracji (kilka tygodni) powinna być wersja programu spełniającą założenia dla danej iteracji. Następnie planuje się co zrobić dalej.

Odpowiada to zasadzie [Open Source](https://pl.wikipedia.org/wiki/Otwarte_oprogramowanie "Otwarte oprogramowanie"): „release early, release often” (wczesne i częste wydania).

#### Nie projektować z góry

Nie można z góry przewidzieć, jaka architektura będzie najlepsza dla danego problemu. Dlatego należy ją tworzyć w miarę rozszerzania programu.

#### Testy jednostkowe

[Testy jednostkowe](https://pl.wikipedia.org/wiki/Test_jednostkowy "Test jednostkowy") pisze się zanim w ogóle zacznie się pisać kod – najlepiej na początku iteracji. Potem pisze się kod, który potrafi je wszystkie przejść. Takie testy dają zapewnienie (o ile testy są dobrze napisane), że to, co ważne, zostanie zaprojektowane, na to zaś, co nie jest ważne, programiści nie będą tracić czasu.

#### Ciągłe modyfikacje architektury

Architektura nie jest czymś, czego nie wolno ruszać. Jeśli [modyfikacja architektury](https://pl.wikipedia.org/wiki/Refactoring "Refactoring") ułatwi przejście danej iteracji i nie zepsuje wyników testów uzyskanych na poprzednich, należy ją wykonać. Pod tę zasadę podlega także usuwanie wszystkich znanych błędów przed rozszerzeniem funkcjonalności.


### Realizacja w praktyce

W iteracyjnym procesie powstawania systemu informatycznego ważną rolę pełni system kontroli wersji. W tym projekcie korzystam z [GIT](https://git-scm.com/). Każda główna iteracja oznacza stworzenie nowej gałęzi(`branch`), w której nazwie znajduje się numer aktualnej iteracji (major version). Główna iteracja składa się z iteracji podrzędnych (minor version), które w git występują jako `commit` w ich nazwie występuje odpowiedni numer iteracji podrzędnej. W momencie uznania, że aktualna wersja (major version) spełnia wymagania ustalone na początku iteracji dokonuje operacji scalania `merge` aktualnej gałęzi z gałęzią główną `master-branch`. W tym momencie tworzona jest kolejna gałąź z nazwą odpowiadającą kolejnej iteracji i cykl się powtarza. 

Pseudo kod powyższego opisu:
``` ts
let majorVersion =0;
let minorVersion =0;
while(true)
{    
    git.newBrach(name: majorVersion) //tworzę nową gałąź
    wyznaczNowyCel();
    while(!czyCelZostałOsiągniety())
    {
        realizacjaCelu();
        git.commit(name: minorVersion);
        minorVersion++;
    }
	git.merge() // scalanie z master
    minorVersion=0;
    majorVersion++;
}
```

Poniższy screen obrazuje powstałą w ten sposób strukturę `commits` i `branches`. Niebieska linia przedstawia gałąź `master`, kolorami przedstawione są wszystkie gałęzie kolejnych iteracji
![](Pasted%20image%2020230529145216.png)
## CI / CD

Jest to maksymalne zautomatyzowanie i przyspieszenie procesu przetworzenia kodu źródłowego do gotowego systemu informatycznego

### Realizacja
Wykorzystuję do tego celu dwa narzędzia:
1. framework [NextJS](https://vercel.com/solutions/nextjs?utm_source=google&utm_medium=cpc&utm_campaign=17166484775&utm_campaign_id=17166484775&utm_term=next%20js&utm_content=134252114817_626380274875&gad=1&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEct38dlVJCSHtujquAFxwOD5VZQzhVdn2ePglTMclQZeyF_oUbuzEUaAhsDEALw_wcB)
2. platformę [GitHub](https://github.com/)

#### NextJs
Umożliwia kompilacje kodu do postaci, która może być udostępniana przez serwer przeglądarkom internetowym. Projekt jest pisany w [TypeScript](https://www.typescriptlang.org/), ponadto wykorzystuje komponenty [React](https://pl.react.dev/) Ten cały kod musi zostać skompilowany do JavaScript/Html.

#### GitHub

Github jest platformą, która umożliwia:
1. hostowanie repozytorium Git <- to jest najważniejsze zadanie GitHub'a
2. hostowanie statycznych stron internetowych <- dokładnie tego potrzebuje w tym projekcie
3. dokonanie pewnych operacji w ramach [GitHub Actions](https://github.com/features/actions) . To znaczy kompilację kodu źródłowego do postaci wymaganej przez serwer i przeniesienie tego (`deploy`) na serwer statycznych stron GitHub. Akcją jest wyzwalana przez jakiś triger, w tym przypadku jest to modyfikacja gałęzi `master`, to znaczy każdy `push` do tej gałęzi aktywuje akcję. Zadania w ramach akcji są zdefiniowane w repozytorium w katalogu `.github/workflos` w pliku z rozszerzenie `.yml`. Tutaj korzystam z gotowego pliku przygotowanego dla tego frameworka.
#### podsumowanie
Dzięki temu każde wypchnięcie gałęzi `master` na maszynie developera po krótkiej chwili skutkuję powstaniem nowej wersji aplikacji na serwerze użytkowym.


