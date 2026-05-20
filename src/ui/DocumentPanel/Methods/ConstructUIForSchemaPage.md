---
title: ConstructUIForSchemaPage
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.ConstructUIForSchemaPage(PageSchema, LayoutGroup, HashSet&lt;string&gt;) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void ConstructUIForSchemaPage(PageSchema pageSchema,
                                     LayoutGroup layoutGroup,
                                     HashSet<string> suppressSet)
```

Տրված էջի սխեմայի հիման վրա կառուցում է վահանակի մեկ էջի ինտերֆեյսը՝ ըստ դաշտերի դասավորման։ Հաջորդական դաշտերը, որոնց **DisplayPosition** արժեքը նշում է հորիզոնական դասավորություն, խմբավորվում են ընդհանուր հորիզոնական դասավորման խմբում։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| pageSchema | PageSchema | — | Էջի սխեման՝ պարունակող դաշտերը և դրանց դասավորությունը։ |
| layoutGroup | LayoutGroup | — | Ծնող դասավորման խումբը, որում տեղադրվում են էջի տարրերը։ |
| suppressSet | HashSet&lt;string&gt; | — | Բացառվող էջի տարրերի ներքին անունների բազմությունը։ |
