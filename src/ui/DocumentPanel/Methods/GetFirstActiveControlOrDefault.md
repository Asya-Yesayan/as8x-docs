---
title: GetFirstActiveControlOrDefault
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetFirstActiveControlOrDefault() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public Control GetFirstActiveControlOrDefault()
```

Վերադարձնում է փաստաթղթի վահանակի առաջին տեսանելի և խմբագրման համար հասանելի դաշտը։ Տեսանելի թաբերի առկայության դեպքում դիտարկվում են միայն ակտիվ թաբի դաշտերը։ Հասանելի դաշտի բացակայության դեպքում վերադարձնում է վահանակի առաջին տեսանելի դաշտը։