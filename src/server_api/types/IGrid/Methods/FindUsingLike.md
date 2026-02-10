---
title: FindUsingLike
nav_exclude: true
---

# IGrid.FindUsingLike(Dictionary<string, object>, string, string) մեթոդ

```c#
public int FindUsingLike(Dictionary<string, object> filter, 
                         string excludeColumnName = null, 
                         string excludeValue = null);
```

Վերադարձնում է աղյուսակի առաջին տողի ինդեքսը, որը համապատասխանում է տրված ֆիլտրին՝ օգտագործելով Like համեմատման պայմանը։ Եթե համապատասխանող տող չի գտնվել, վերադարձվում է -1։

| Անվանում    | Տվյալների տիպ   | Լռությամբ արժեք | Նկարագրություն   |
| ------------------- | ---------------------------- | --------------- | ------------------------ |
| filter            | Dictionary<string, object> | —               | Ֆիլտրի պայմանների Dictionary, որտեղ բանալին սյան ներքին անունն է, իսկ արժեքը՝ որոնման արժեքը, որոնք համեմատվում են `Like` պայմանով։ |
| excludeColumnName | string       | null          | Այն սյան անունը, որը անհրաժեշտ է բացառել որոնումից։      |
| excludeValue      | string       | null          | Արժեք, որը պետք է անտեսվի նշված բացառվող սյան (**excludeColumnName**) շրջանակում։    |

**Օրինակ**

```c#
var filter = new Dictionary<string, object>
{
    { "CODE", searchText }
};

var Index = Grid("NOTES").FindUsingLike(filter, "ID");
```
