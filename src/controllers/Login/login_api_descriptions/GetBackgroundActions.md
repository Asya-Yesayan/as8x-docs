---
title: LoginController.GetBackgroundActions() մեթոդ
---

```c#
[HttpGet("BackgroundActions")]
[Authorize]
public Task<List<BackgroundActionInfo>> GetBackgroundActions()
```

Վերադարձնում է համակարգում առկա բոլոր ֆոնային գործողությունների նկարագրությունների ցուցակը։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-f6294b59-5440-464f-88e0-dc95caffbc93)։

## Վերադարձվող արժեք

Համակարգում առկա բոլոր ֆոնային գործողությունների նկարագրությունների ցուցակը, որտեղ յուրաքանչյուրը ունի հետևյալ կառուցվածքը՝

| Անվանում | Տեսակ | **Նկարագրություն** |
| --- | --- | --- |
| fISN | int | Ֆոնային գործողությունը նկարագրող փաստաթղթի ներքին նույնականացման համարը (isn)։ |
| Operation | string | Ներքին անունը (կոդը)։ |
| Subtype | string | Ենթատեսակը։ |
| Priority | short | Կատարման առաջնահերթությունը։ |
| Periodicity | ActionPeriodicity | Կատարման պարբերությունը։ |
