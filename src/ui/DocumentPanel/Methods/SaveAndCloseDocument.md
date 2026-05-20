---
title: SaveAndCloseDocument
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.SaveAndCloseDocument() մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
protected void SaveAndCloseDocument()
```
Պահպանում և փակում է փաստաթուղթը։ Միայն կարդալու ռեժիմում մեթոդը որևէ գործողություն չի կատարում։ Հաջող պահպանումից հետո պատուհանը փակվում է, իսկ տրանզակցիայի կատարումից հետո առաջացած սխալի առկայության դեպքում այն մշակվում է **ErrorHandler** ծառայության միջոցով։
