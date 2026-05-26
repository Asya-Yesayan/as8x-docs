---
title: GetCustomUIRequestConfig
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetCustomUIRequestConfig() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual Dictionary<int, Func<JsonElement, JsonElement>> GetCustomUIRequestConfig()
```

Սահմանում է UI-ի հատուկ հարցումների մշակման Dictionary-ն։ Բառարանի յուրաքանչյուր մուտքը UI-ի հարցումի նույնականացուցիչին համապատասխանեցնում է **JsonElement** արգումենտ ընդունող և **JsonElement** վերադարձնող ֆունկցիա։

Մեթոդը չմշակելու դեպքում վերադարձվում է **null**, որի դեպքում UI-ի հատուկ հարցումներ չեն մշակվում։