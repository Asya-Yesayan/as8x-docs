---
title: Document.DefineLimits(string, int, DateTime, decimal, decimal) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDoc.DefineLimits

**Դաս՝** [Document](../Document.md)

```c#
public void DefineLimits(string accountingType, 
                         int isn, 
                         DateTime date, 
                         decimal upperLimit, 
                         decimal lowerLimit)
```

Սահմանում է հաշվառման վերին և ստորին սահմանաչափերը։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accountingType  | string               | -              | Հաշվառման կոդը։ |
| isn             | int                  | -              | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| date            | DateTime             | -              | Վերին և ստորին սահմանաչափերի նշանակման ամսաթիվը։ |
| upperLimit      | decimal              | -              | Սահմանվող վերին սահմանաչափը։ |
| lowerLimit      | decimal              | -              | Սահմանվող ստորին սահմանաչափը։ |

