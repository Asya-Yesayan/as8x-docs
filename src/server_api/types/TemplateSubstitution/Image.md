---
title: TemplateSubstitution.Image(string) մեթոդ
---

```c#
public PrintTemplateSubstitutionImage Image(string name)
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունից վերադարձնում է նշված ներքին անունով (կոդով) նկարի նկարագրությունը, բացակայության դեպքում առաջացնում է սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Նկարի ներքին անունը (կոդը)։ |

**Օրինակ**

```c#
public Task PersonalData(TemplateSubstitution templateSubstitution)
    templateSubstitution.AddImage("1111");
    templateSubstitution.Image("1111").File = foto;
    templateSubstitution.Image("1111").Width = 60;
    templateSubstitution.Image("1111").Height = 15;
```
