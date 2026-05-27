---
title: AddControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddControl(Control)](#documentpaneladdcontrolcontrol-մեթոդ) | Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում։ |
| [AddControl(Control, string, bool)](#documentpaneladdcontrolcontrol-string-bool-մեթոդ) | Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ տվյալների աղբյուրի ներքին անունով։ |
| [AddControl(Control, string, Control, Control)](#documentpaneladdcontrolcontrol-string-control-control-մեթոդ) | Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ թաբերի վալիդացման համար նշված ենթադաշտերով։ |
| [AddControl(FieldSchema)](#documentpaneladdcontrolfieldschema-մեթոդ) | Տրված դաշտի սխեմայի հիման վրա ավելացնում է համապատասխան տիպի դաշտ վահանակում և վերադարձնում է այն։ |

### DocumentPanel.AddControl(Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void AddControl(Control control)
```

Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Գրանցվող դաշտը։ |

### DocumentPanel.AddControl(Control, string, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void AddControl(Control control,
                          string dataItemName,
                          bool registerForTabValidation = true)
```

Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ տվյալների աղբյուրի ներքին անունով։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Գրանցվող դաշտը։ |
| dataItemName | string | - | Տվյալների աղբյուրի ներքին անունը։ |
| registerForTabValidation | bool | true | **true** արժեքի դեպքում դաշտը գրանցվում է որպես ինքնավալիդացվող թաբերի փոխարկման ընթացքում։ |

### DocumentPanel.AddControl(Control, string, Control, Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void AddControl(Control control,
                          string dataItemName,
                          Control forTabValidation,
                          Control forTabValidation2 = null)
```

Ավելացնում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ թաբերի վալիդացման համար նշված ենթադաշտերով։ Կիրառվում է կազմված դաշտերի (օրինակ՝ **DropDownControl**, **NumPairControl**) համար, որոնց ներքին ենթադաշտերն են ֆոկուս ստանում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Գրանցվող դաշտը։ |
| dataItemName | string | - | Տվյալների աղբյուրի ներքին անունը։ |
| forTabValidation | Control | - | Թաբերի վալիդացման համար նշված առաջին ենթադաշտը։ |
| forTabValidation2 | Control | null | Թաբերի վալիդացման համար նշված երկրորդ ենթադաշտը։ |

### DocumentPanel.AddControl(FieldSchema) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public Control AddControl(FieldSchema fieldSchema)
```

Տրված դաշտի սխեմայի հիման վրա ավելացնում է համապատասխան տիպի դաշտ վահանակում և վերադարձնում է այն։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| fieldSchema | FieldSchema | - | Փաստաթղթի դաշտի սխեման։ |
