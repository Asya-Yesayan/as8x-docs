---
layout: page
title: "Սխալների դասեր"
nav_exclude: true
---

# AS-8X սխալների դասերի ցուցակ

Այս բաժինը նախատեսված է AS-8X նախագծի սխալների (Exception) դասերը նկարագրելու համար՝ ըստ իրենց դերի։ Ընտրությունը կախված է նրանից, թե որտեղ է առաջանում սխալը (UI, սերվեր, client), ով է այն տեսնում (օգտագործող, լոգ, ծրագրավորող) և ինչ լրացուցիչ տվյալներ է պարունակում։

## Բազային սխալներ

| Անվանում                                | Ժառանգում է                              | Տեղ         | Նկարագրություն                                                                                                  |
| --------------------------------------- | ---------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| [ASException](ASException.md)           | Exception                                | UI          | UI-ի սխալների ընդհանուր բազային դաս՝ ցուցադրման տվյալներով (պատկեր, գլխագիր, դաշտ, տող)։                          |
| [RESTException](RESTException.md)       | Exception                                | Common      | Սերվերի կողմի սխալ՝ նախատեսված օգտագործողի սխալների համար, չի լոգավորվում, ճանաչվում է 4x UI-ի կողմից։             |
| [ApiException](ApiException.md)         | Exception                                | Client      | Client-ում սերվերից ստացված HTTP սխալի ներկայացում, RESTException-ի client-կողմի համարժեքն է։                    |

## RESTException-ի ժառանգներ

| Անվանում                                                    | Տեղ     | Նկարագրություն                                                                                |
| ----------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| [InvisibleException](InvisibleException.md)                 | Common  | RESTException, որի դեպքում սխալի պատուհանը UI-ում չի ցուցադրվում։                            |

## ASException-ի ժառանգներ

| Անվանում                                    | Տեղ  | Նկարագրություն                                                                              |
| ------------------------------------------- | ---- | ------------------------------------------------------------------------------------------- |
| [DocumentException](DocumentException.md)   | UI   | Փաստաթղթի մշակման հետ կապված UI սխալներ (դաշտի անվավեր արժեք, հաշվետվության սխալ)։           |

## Մասնագիտացված սխալներ

| Անվանում                                                            | Ժառանգում է        | Տեղ       | Նկարագրություն                                                                                |
| ------------------------------------------------------------------- | ------------------ | --------- | --------------------------------------------------------------------------------------------- |
| [ParserException](ParserException.md)                               | Exception          | Common    | `.as` ֆայլերի վերլուծության սխալներ (ֆայլ, տող, պատճառ)։                                        |
| [DocumentNotFoundException](DocumentNotFoundException.md)           | Exception          | Core      | Տրված նույնականացմամբ փաստաթղթի բացակայության դեպք։                                            |
| [EmptyRequestException](EmptyRequestException.md)                   | Exception          | Core      | DataSource-ի դատարկ հարցումի դեպք։                                                            |
| [RequiredParameterException](RequiredParameterException.md)         | ArgumentException  | Core      | DataSource-ի պարտադիր պարամետրի բացակայության դեպք։                                            |
| [StorageException](StorageException.md)                             | Exception          | Core      | **LiteX** պահեստավորման ենթահամակարգի սխալներ՝ ErrorCode-ով։                                   |
| [UnloggedException](UnloggedException.md)                           | Exception          | Core      | Չլոգավորվող սխալ, որի դեպքում սխալների մշակիչը բաց է թողնում գրանցումը։                       |
| [DetailedException](DetailedException.md)                           | Exception          | Core      | Մանրամասների ցուցակ կրող սխալ (օրինակ՝ SQL սխալների ցուցակ)։                                  |

## Ընտրության ուղեցույց

| Դեպք                                                                                                    | Օգտագործել                                                  |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Սերվերից օգտագործողին ցուցադրելու սխալ                                                                  | [RESTException](RESTException.md)                           |
| Սերվերից սխալ, բայց UI-ին չցուցադրել                                                                    | [InvisibleException](InvisibleException.md)                 |
| UI-ի վալիդացիա, պատուհանի տեղային սխալ                                                                   | [ASException](ASException.md)                               |
| Փաստաթղթի դաշտի կամ հաշվետվության սխալ                                                                   | [DocumentException](DocumentException.md)                   |
| Սերվերից ստացված սխալի մշակում client-ում                                                              | [ApiException](ApiException.md)                             |
| `.as` ֆայլի վերլուծության սխալ                                                                          | [ParserException](ParserException.md)                       |
| Փաստաթուղթը պահեստում չի գտնվել                                                                          | [DocumentNotFoundException](DocumentNotFoundException.md)   |
| DS-ի հարցումը դատարկ է, մշակում չի պահանջվում                                                            | [EmptyRequestException](EmptyRequestException.md)           |
| DS-ի պարտադիր պարամետրն անցել է                                                                          | [RequiredParameterException](RequiredParameterException.md) |
| **LiteX**-ի պահեստավորման սխալ                                                                          | [StorageException](StorageException.md)                     |
| Սխալ, որը չպետք է գրանցվի լոգում                                                                         | [UnloggedException](UnloggedException.md)                   |
| Բազմակի սխալ-գրառումներ՝ մեկ սխալի մեջ ամփոփելու համար                                                   | [DetailedException](DetailedException.md)                   |
