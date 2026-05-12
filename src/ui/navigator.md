---
layout: page
title: "Ուղղորդիչ ծառի նկարագրություն"
---

# Ուղղորդիչ ծառի նկարագրություն

Նախատեսված է Աշխատանքային տեղերի (ԱՇՏ-ների) ուղղորդիչ ծառի նկարագրման համար։ Նկարագրությունը պահվում է `JSON` ֆորմատով ֆայլում և համապատասխանում է `NavigatorTreeSchema.json` սխեմային։

## Շարահյուսություն

```json
{
    "$schema": "https://armsoftupdates.blob.core.windows.net/schemas/NavigatorTreeSchema.json",
    "name": "sName",
    "armenianCaption": "sCaption",
    "englishCaption": "sECaption",
    "icon": "sIcon",
    "type": "sType",
    "system": bSystem,
    "nodes": [ Node, ... ]
}
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| `$schema` | JSON սխեմայի URL-ը՝ նկարագրության կառուցվածքը ստուգելու համար։  |
| name | Ուղղորդիչ ծառի ներքին անունը (օր.՝ `ADMIN`)։ Կիրառվում է համակարգի կողմից որպես նույնացուցիչ։ |
| armenianCaption | Ուղղորդիչ ծառի հայերեն անվանումը։ Ցուցադրվում է ինտերֆեյսի վերին հատվածում։ |
| englishCaption | Ուղղորդիչ ծառի անվանումը անգլերեն անվանումը։ |
| type | Ուղղորդիչ ծառի պատկերակը։ Կիրառելի են `*.svg` ֆորմատի նկարները ծրագրի ռեսուրսներից (օր.՝ `admin_tools_16.svg`)։ |
| icon | Ուղղորդիչ ծառի տեսակը։ Թույլատրելի արժեքներն են՝ <br/> `Standard` — Աշխատանքային տեղ (ԱՇՏ)։ <br/> `Auxiliary` — Օգնական ուղորդիչ ծառ (տեղադրվում է այլ ԱՇՏ-ներում)։ <br/> `User` — Օգտագործողի անձնական ուղորդիչ ծառ (ձևավորվում է ամեն օգտագործողի համար առանձին)։ |
| system | Համակարգային հատկանիշ (`true`/`false`)։ `true` արժեքի դեպքում օգտագործողի կողմից խմբագրումը չի թույլատրվում։ |
| nodes | Ուղղորդիչ ծառի առաջին մակարդակի հանգույցների զանգված։ |

---

# Ուղղորդիչ ծառի հանգույցի նկարագրություն

Ուղղորդիչ ծառի հանգույցը կա՛մ խմբավորող ծնող հանգույց է (պարունակում է ենթահանգույցներ), կա՛մ հղում է, որն ակտիվացնելու դեպքում բացում է փաստաթուղթ, դիտելու ձև, թղթապանակ, կամ աշխատացնում է ծրագրային ֆունկցիա։

## Շարահյուսություն

```json
{
    "name": "sName",
    "armenianCaption": "sCaption",
    "englishCaption": "sECaption",
    "type": "sType",
    "icon": "sIcon",
    "nodes": [ Node, ... ]
}
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| name | Կանչվող օբյեկտի ներքին անունը (օր.՝ `BankUserManagement`, `ShowParamsDialog`)։  |
| armenianCaption | Հանգույցի հայերեն անվանումը։ |
| englishCaption | Հանգույցի անգլերեն անվանումը։ |
| type | Հանգույցի տեսակը, որով որոշվում է կանչվող օբյեկտի [տիպը](#ուղղորդիչ-ծառի-հանգույցի-տեսակ)։ Բացակայության դեպքում հանգույցը համարվում է թղթապանակ, իսկ `nodes` պետք է լրացված լինի։ |
| icon | Հանգույցի պատկերակը։ Կիրառելի են `*.svg` ֆորմատի նկարներ (օր.՝ `table_16.svg`, `import_16.svg`, `columns_16.svg`)։ Չլրացնելու դեպքում օգտագործվում է տեսակին համապատասխան ստանդարտ պատկերակը։ |
| nodes | Ենթահանգույցների զանգված։ |

## Ուղղորդիչ ծառի հանգույցի տեսակ

| Արժեք | Նկարագրություն |
|--|--|
| `Document` | Փաստաթուղթ։ Համակարգում պետք է լինի Document դասը ժառանգող դաս, որի Document ատրիբուտի name-ը համընկնում է հանգույցի name-ին։ |
| `DataView` | Դիտելու ձև։ Համակարգում պետք է լինի DataView դասը ժառանգող դաս, որի DataView ատրիբուտի name-ը համընկնում է հանգույցի name-ին։  |
| `TreeBrowser` | Ծառատիպ տեղեկատու։ Համակարգում պետք է լինի TreeEdit դասը ժառանգող դաս, որի TreeEdit ատրիբուտի name-ը համընկնում է հանգույցի name-ին։ |
| `ModuleCall` | Ծրագրային մեթոդի կանչ։ Կանչում է name դաշտում նշված մեթոդը, որի համար պետք է սահմանված լինի NavigatorEntry ատրիբուտ, իսկ մեթոդը պարունակող դասի համար՝ ContainsSpecialComponent ատրիբուտը |
| `UserReport` | Օգտագործողի կողմից նկարագրված հաշվետվություն, որոնք նկարագրվում են «Ադմինիստրատորի Աշտ» -> «Ընդլայնումներ» -> «Օգտագործողի հաշվետվություններ» դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայով։ |

## Օրինակ

```json
{
  "$schema": "https://armsoftupdates.blob.core.windows.net/schemas/NavigatorTreeSchema.json",
  "armenianCaption": "Ադմինիստրատորի ԱՇՏ",
  "englishCaption": "Administrator",
  "icon": "admin_tools_16.svg",
  "name": "ADMIN",
  "nodes": [
    {
      "armenianCaption": "Աշխատասեղան",
      "englishCaption": "Desktop",
      "nodes": [
        {
          "armenianCaption": "Օգտագործողներ",
          "englishCaption": "Users",
          "name": "BankUserManagement",
          "type": "DataView"
        },
        {
          "armenianCaption": "Օգտագործողների դերեր",
          "englishCaption": "Users roles",
          "name": "Roles",
          "type": "DataView"
        }
      ]
    },
    {
      "armenianCaption": "Մատյաններ",
      "englishCaption": "Journals",
      "nodes": [
        {
          "armenianCaption": "Ստեղծված փաստաթղթեր",
          "englishCaption": "Created documents",
          "name": "CreatedDocs",
          "type": "DataView"
        },
        {
          "armenianCaption": "Հեռացված փաստաթղթեր",
          "englishCaption": "Deleted documents",
          "name": "DeletedDocs",
          "type": "DataView"
        }
      ]
    }
  ],
  "system": true,
  "type": "Standard"
}
```