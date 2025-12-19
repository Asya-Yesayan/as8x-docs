---
title: TemplateSubstitution.AddImage(string) մեթոդ
---

```c#
public PrintTemplateSubstitutionImage AddImage(string name)
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է նկար և վերադարձնում [նկարի նկարագրությունը](../../PrintTemplateSubstitutionImage.md), որի միջոցով անհրաժեշտ է ավելացնել նկարի տվյալները ([ֆայլը](../../FieldTypeProvider/Properties/File.md), [երկարությունը](../../PrintTemplateSubstitutionImage/Properties/Height.md), [լայնությունը](../../PrintTemplateSubstitutionImage/Properties/Width.md)...):

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Նկարի ներքին անունը (կոդը)։ |

**Օրինակ**

```c#
public Task PersonalData(TemplateSubstitution templateSubstitution)
    templateSubstitution.AddImage("1111");
    templateSubstitution.Image("1111").File = photo;
    templateSubstitution.Image("1111").Width = 60;
    templateSubstitution.Image("1111").Height = 15;
```
