---
title: GridCellValueChanged
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GridCellValueChanged(object, CellValueChangedEventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected internal void GridCellValueChanged(object sender,
                                             CellValueChangedEventArgs e)
```

Մշակում է աղյուսակի վանդակի արժեքի փոփոխման իրադարձությունը՝ նշելով, որ վահանակի վիճակը փոփոխվել է։ Վահանակի առաջին ակտիվացման ընթացքում մեթոդը որևէ գործողություն չի կատարում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sender | object | — | Իրադարձության աղբյուրը։ |
| e | CellValueChangedEventArgs | — | Վանդակի արժեքի փոփոխման իրադարձության պարամետրերի օբյեկտը։ |
