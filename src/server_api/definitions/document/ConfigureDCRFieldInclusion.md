---
title: Document.ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ConfigureDCRFields

**Դաս՝** [Document](../document.md)

```c#
public virtual Task ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs args)
```

Այս մեթոդը նախատեսված է DCR-ում ներառվող և չներառվող դաշտերը սահմանելու համար։  

Այն թույլ է տալիս որոշել, թե փաստաթղթի որ դաշտերի փոփոխությունները պետք է ցուցադրվեն տեքստային հաշվետվությունում, որը բացվում է **«Փաստաթղթի պատմություն»** դիտելու ձևի **«Դիտել փոփոխությունները տեքստային»**, **«Դիտել փոփոխությունները տեքստային համեմատիչով»** կոնտեքստային ֆունկցիաներով։

Լռությամբ տեքստային հաշվետվությունում ցուցադրվում են այն դաշտերը, որոնք չունեն **H** ատրիբուտը։

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | ConfigureDCRFieldInclusionEventArgs | - | [ConfigureDCRFieldInclusionEventArgs](../../types/ConfigureDCRFieldInclusionEventArgs.md) դասի օբյեկտ։ |

**Օրինակ**

```c#
public override Task ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs args)
{
    args.FieldInclusions.Add("TYPE", true);
    args.FieldInclusions.Add("CODE", false);
    return Task.CompletedTask;
}
```
