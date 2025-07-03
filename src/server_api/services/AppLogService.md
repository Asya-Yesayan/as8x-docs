---
layout: page
title: "AppLogService սերվիս" 
---

{% assign selected_version = site.selected_version | default: "1.0" %}

## Բովանդակություն

- [Ներածություն](#ներածություն)
- [Մեթոդներ](#մեթոդներ)
  - [Write](#write)
  - [Write](#write-1)

## Ներածություն

AppLogService դասը նախատեսված է հատուկ իրադարձությունների (տարբերակի փոփոխություն, Debug-ի գործարկում) մանրամասների տվյալների պահոցում գրանցվելու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

{% if selected_version == "1.0" %}
### Write

```c#
public Task Write(AppLogInfo appLogInfo)
```

Գրանցում է հատուկ իրադարձության (տարբերակի փոփոխություն, Debug-ի գործարկում...) մանրամասները տվյալների պահոցում։

**Պարամետրեր**

* `appLogInfo` - [Հատուկ իրադարձության մանրամասները նկարագրող դասի օբյեկտ](../types/AppLogInfo.md):
{% endif %}

{% if selected_version == "2.0" %}
### Write

```c#
public Task Write(string moduleCode, string operationCode, string comment, int objectISN, int baseISN)
```

Գրանցում է հատուկ իրադարձության (տարբերակի փոփոխություն, Debug-ի գործարկում...) մանրամասները տվյալների պահոցում։

**Պարամետրեր**

* `moduleCode` - Իրադարձության մոդուլի կոդ։
* `operationCode` - Իրադարձության գործողության կոդ։
* `comment` - Իրադարձությունը նկարագրող մեկնաբանություն։
* `objectISN` - Իրադարձությունը իրականացրած երկրորդային փաստաթղթի ներքին նույնականացման համար (isn)։
* `baseISN` - Իրադարձությունը իրականացրած հիմքային փաստաթղթի ներքին նույնականացման համար (isn)։
{% endif %}

some text that is general for all versions.

