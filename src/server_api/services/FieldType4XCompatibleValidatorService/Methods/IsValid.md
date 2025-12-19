---
title: FieldType4XCompatibleValidatorService.IsValid(FieldType) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.CheckSysType

**Դաս՝** [FieldType4XCompatibleValidatorService](../../FieldType4XCompatibleValidatorService.md)

```c#
public virtual bool IsValid(FieldType fieldType)
```

Ստուգում է արդյոք նշված համակարգային տիպը համապատասխանում է 4x-ում [համակարգային տիպերի](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/types.html) համար սահմանված կանոններին։

Օրինակ NumericFieldType-ի երկարությունը չպիտի գերազանցի 14-ը, իսկ FolderFieldType-ում նշված թղթապանակի ներքին անունը՝ 20-ը։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| fieldType | FieldType | - | Համակարգային տիպը։ |
