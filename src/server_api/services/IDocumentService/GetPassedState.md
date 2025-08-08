---
title: IDocumentService.GetPassedState մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.GetDocPassedState](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocPassedState.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetPassedState(int, List&lt;short&gt;, bool, bool)](#idocumentservicegetpassedstateint-listshort-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը տրված վիճակների ցուցակից։ |
| [GetPassedState(int, string, bool, bool)](#idocumentservicegetpassedstateint-string-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը վիճակների ցուցակը սահմանող sql հարցում արդյունքից։ |
| [GetPassedState(int, short, bool, bool)](#idocumentservicegetpassedstateint-short-bool-bool-մեթոդ) | Ստուգում է տրված վիճակը հանդիանում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը, թե ոչ։ |
| [GetPassedState(int, bool)](#idocumentservicegetpassedstateint-bool-մեթոդ) | Վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը։ |

### IDocumentService.GetPassedState(int, List&lt;short&gt;, bool, bool) մեթոդ

```c#
public short GetPassedState(int isn, 
                            List<short> states, 
                            bool lastState = true, 
                            bool inStates = true)
```

Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը տրված վիճակների ցուցակից։

Համապատասխանող վիճակ չգտնելու դեպքում վերադարձնում է `-1`։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `states` - Փաստաթղթի վիճակների ցուցակ։
* `lastState` - `true` արժեքի դեպքում վերադարձնում է վերջին նշանակված վիճակը, հակառակ դեպքում՝ առաջինը։
* `inStates` - `true` արժեքի դեպքում փնտրվում է վիճակ, տրված վիճակների ցուցակից։ 
  Հակառակ դեպքում՝ ցուցակից դուրս։

### IDocumentService.GetPassedState(int, string, bool, bool) մեթոդ

```c#
public short GetPassedState(int isn, string statesSubQuery, bool lastState = true, bool inStates = true)
```

Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը վիճակների ցուցակը սահմանող sql հարցում արդյունքից։

Համապատասխանող վիճակ չգտնելու դեպքում վերադարձնում է `-1`։


**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `statesSubQuery` - Փաստաթղթի վիճակները սահմանող sql հարցում:
* `lastState` - `true` արժեքի դեպքում վերադարձնում է վերջին նշանակված վիճակը, հակառակ դեպքում՝ առաջինը։
* `inStates` - `true` արժեքի դեպքում փնտրվում է վիճակ, վիճակների ցուցակը սահմանող sql հարցում արդյունքից։ 
  Հակառակ դեպքում՝ արդյունքից դուրս։

**Օրինակ**
```c#
var lastConfirmationState = documentService.GetPassedState(doc.ISN, 
      $"Select fSTATE From DOCLOG WHERE fISN = {doc.ISN} and fSTATE Between 100 and 200");
```

### IDocumentService.GetPassedState(int, short, bool, bool) մեթոդ

```c#
public short GetPassedState(int isn, short state, bool lastState = true, bool inStates = true)
```

Ստուգում է տրված վիճակը հանդիանում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը, թե ոչ։
Պայմանին բավարարելու դեպքում վերադարձնում է նշված վիճակը։ 
Չբավարարելու դեպքում վերադարձնում է `-1`։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `state` - Փաստաթղթի վիճակ։
* `lastState` - `true` արժեքի դեպքում վերադարձնում է վերջին վիճակը, հակառակ դեպքում՝ առաջինը։
* `inStates` - `true` արժեքի դեպքում փնտրվում է վիճակ, որը վիճակների ցուցակի միջից է։ 
  Հակառակ դեպքում՝ ցուցակի միջից չէ։

### IDocumentService.GetPassedState(int, bool) մեթոդ

```c#
public short GetPassedState(int isn, bool lastState = true)
```

Վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `lastState` - `true` արժեքի դեպքում վերադարձնում է վերջին նշանակված վիճակը, հակառակ դեպքում՝ առաջինը։

