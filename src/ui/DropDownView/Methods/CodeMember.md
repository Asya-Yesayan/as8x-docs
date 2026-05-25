---
title: CodeMember
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.CodeMember(int index) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public abstract string CodeMember(int index)
```

Սահմանում է DropDownView-ի՝ տրված ինդեքսով տողի կոդի արժեքը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| index | int | - | Տողի ինդեքսը DropDownView-ի տողերի ցուցակում։ |

**Վերադարձնում է**

Տրված ինդեքսով տողի կոդի արժեքը։

**Օրինակ**

```c#
public override string CodeMember(int index)
{
    return this.Rows[index].Code;
}
```
