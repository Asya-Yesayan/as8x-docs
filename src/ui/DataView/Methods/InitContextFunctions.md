---
title: InitContextFunctions
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.InitContextFunctions() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual PopupMenu InitContextFunctions()
```

Ստեղծում և վերադարձնում է դիտելու ձևի կոնտեքստային մենյուն։ Մենյուում ավտոմատ կերպով ցուցադրվում են նաև համակարգային կոնտեքստային ֆունկցիաները («Ավելացնել», «Հեռացնել», «Դիտել/Խմբագրել», ․․․), որոնց հասանելիությունը կարգավորվում է [AllowAdd](../Properties/AllowAdd.md), [AllowDelete](../Properties/AllowDelete.md), [AllowEdit](../Properties/AllowEdit.md) և համանման հատկությունների միջոցով։

**Օրինակ**

```c#
public override PopupMenu InitContextFunctions()
{
    var panel = this.Panel.InitContextMenu();
    panel.AddContextFunction(nameof(ScheduleForExecution), "Հերթագրել կատարման", ScheduleForExecution, FunctionAvailability.CurrentRow);
    return panel;
}
```

![Context_Menu](../../images/DataView/Context_Menu.png)