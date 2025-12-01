---
title: Document.ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [ConfigureDCRFields](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/ConfigureDCRFields.html)

**Դաս՝** [Document](../document.md)

```c#
public virtual Task ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs args)
```

Այս մեթոդը թույլ է տալիս որոշել, թե փաստաթղթի որ դաշտերի փոփոխությունները պետք է ցուցադրվեն [տեքստային հաշվետվությունում](../../types/TextReport.md), որը բացվում է **«Փաստաթղթի պատմություն»** դիտելու ձևի **«Դիտել փոփոխությունները տեքստային»**, **«Դիտել փոփոխությունները տեքստային համեմատիչով»** կոնտեքստային ֆունկցիաներով։

Լռությամբ նշված [տեքստային հաշվետվությունում](../../types/TextReport.md) ցուցադրվում են այն դաշտերը, որոնք չունեն **H** ատրիբուտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ConfigureDCRFieldInclusionEventArgs](../../types/ConfigureDCRFieldInclusionEventArgs.md) | - | [ConfigureDCRFieldInclusionEventArgs](../../types/ConfigureDCRFieldInclusionEventArgs.md) դասի օբյեկտ։ |

**Օրինակ**

```c#
public override Task ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs args)
{
    args.FieldInclusions.Add("TYPE", true);
    args.FieldInclusions.Add("CODE", false);
    return Task.CompletedTask;
}
```
