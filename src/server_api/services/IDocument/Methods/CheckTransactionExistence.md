---
title: CheckTransactionExistence
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.CheckTransactionExistence(string, int, int) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDocEngine.CheckTransExist

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task CheckTransactionExistence(string description, 
                                      int isn = -1, 
                                      int baseIsn = -1)
```

Համեմատում է Sql-ում և սերվիսում բացված տրանզակցիաների քանակները։ Քանակների անհամապատասխանության կամ սերվիսում տրանզակցիաների բացակայության դեպքում գրանցվում է լոգ [APPLOG](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/APPLOG.html) աղյուսակում: 

[APPLOG](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/APPLOG.html) աղյուսակում լոգը գրանցվում է **SYS** մոդուլի կոդով և **TRN0** կամ **TRNU** գործողության կոդով։

**Պարամետրեր**


| Անվանում      | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------------|---------------|------------------|----------------|
| description   | string        | —                | [APPLOG](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/APPLOG.html) աղյուսակում գրանցվող լոգի նկարագրությունը։ |
| isn           | int           | -1               | Մեթոդը կանչող երկրորդային փաստաթղթի ներքին նույնականացման համար (isn)։ |
| baseIsn       | int           | -1               | Մեթոդը կանչող հիմքային փաստաթղթի ներքին նույնականացման համար (isn)։ |