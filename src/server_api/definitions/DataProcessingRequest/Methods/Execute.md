---
title: Execute(P, CancellationToken)
parent: "Մեթոդներ"
grand_parent: "Տվյալների մշակման հարցում"
---

# DataProcessingRequest.Execute(P, CancellationToken) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.ExecuteDPR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/8X/ExecuteDPR.html)

**Դաս՝** [DataProcessingRequest](../DataProcessingRequest.md)

```c#
public abstract Task<R> Execute(P p, 
                                CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից, այստեղ հարկավոր է մշակել սերվերում աշխատող տրամաբանությունը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| p               | P                    | -              | Մուտքային պարամետրերի նկարագրված դասի օբյեկտ։ |
| stoppingToken   | CancellationToken    | -              | Դադարեցման տոկենը։ |

Տե՛ս օգտագործման [օրինակը](../../dpr_guide.md#execute)։
