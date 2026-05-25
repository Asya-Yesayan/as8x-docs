---
title: OnGridControlEnterPressed
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.OnGridControlEnterPressed(object, EventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected internal void OnGridControlEnterPressed(object sender,
                                                  EventArgs e)
```

Մշակում է աղյուսակում **Enter** ստեղնի սեղմման իրադարձությունը՝ կատարելով փաստաթղթի պահպանում և փակում։ Գործողությունը կատարվում է [AllowSave](AllowSave.md) մեթոդի **true** արժեքի և փաստաթղթի փոփոխված լինելու դեպքում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sender | object | - | Իրադարձության աղբյուրը։ |
| e | EventArgs | - | Իրադարձության պարամետրերի օբյեկտը։ |
