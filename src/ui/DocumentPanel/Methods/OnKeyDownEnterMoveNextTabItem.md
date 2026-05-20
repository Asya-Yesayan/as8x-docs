---
title: OnKeyDownEnterMoveNextTabItem
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.OnKeyDownEnterMoveNextTabItem(object, KeyEventArgs) մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
public void OnKeyDownEnterMoveNextTabItem(object sender,
                                          KeyEventArgs e)
```
Մշակում է թաբում **Enter** ստեղնի սեղմումը՝ տեղափոխելով ֆոկուսը հաջորդ դաշտի վրա։ Ֆոկուսի տեղափոխությունը կատարվում է միայն այն դեպքում, երբ թաբի բովանդակության խումբը ֆոկուս չունի։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sender | object | — | Իրադարձության աղբյուրը, որի արժեքը պետք է լինի **DXTabItem** տիպի։ |
| e | KeyEventArgs | — | Ստեղնաշարի իրադարձության պարամետրերի օբյեկտը։ |
