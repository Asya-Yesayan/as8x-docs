---
title: ApplyDialog
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ApplyDialog(DataViewDialogWindow dialog, bool isRefreshMode) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void ApplyDialog(DataViewDialogWindow dialog, bool isRefreshMode)
```

Կիրառում է dialog-ի ընտրված պարամետրերը DataView-ի Parameters-ի վրա:

Լռությամբ ոչինչ չի կատարում: Override-ն պետք է `Parameters`-ը լրացնի:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| dialog | DataViewDialogWindow | - | Dialog-ի օբյեկտը, որն պարունակում է ընտրված parameter արժեքները: Ոչ-`null`: |
| isRefreshMode | bool | - | `true` → կիրառումը կատարվում է refresh flow-ի ժամանակ: `false` → կատարվում է initial load flow-ի ժամանակ: |

