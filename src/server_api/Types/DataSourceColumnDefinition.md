# DataSourceColumnDefinition

Namespace : ArmSoft.AS8X.Common.Definitions.DataSource.Ready

Այդ դասը նախատեսված է տվյալների աղբյուրի սյան կառուցվածքի պահման համար։

# Հատկություններ

## Type

```c#
public FieldType Type { get; internal set; }
```

Սյան համակարգային տիպը:

## ShowType

```c#
public FieldType ShowType { get; internal set; }
```
Սահմանում է համակարգային տիպը ցուցադրման ժամանակ։  

Սովորաբար այս հատկությունը օգտագործում են, եթե տվյալների տիպը, որը համապատասխանում է սյունակի արժեքներին, հարմար չի ցուցադրման համար։
Օրինակ եթե columnType = FieldTypeProvider.GetStringFieldType(150) է, բայց շատ դեպքերում բավական է տեսնել տողի սկիզբը, ապա կարելի է սահմանել showType = 
FieldTypeProvider.GetStringFieldType(32)։

## Width

```c#
public short Width { get; internal set; }
```

Սյան լայնությունը։ 
Եթե այս հատկության արժեքը բացակայում է, ապա սյան լայնությունը որոշվում է ելնելով Type, ShowType, Caption, ECaption հատկությունների արժեքներից։

## HeadLines

```c#
public short HeadLines { get; internal set; } = 2;
```

Սյան լայնությունը։ 
Սյան անվանման մեջ տողերի քանակ։ Եթե այս հատկության արժեքը բացակայում է, ապա սյան անվանման մեջ կա 2 տող։

## HeadLines

```c#
public short HeadLines { get; internal set; } = 2;
```

Սյան լայնությունը։ 
Սյան անվանման մեջ տողերի քանակ։ Եթե այս հատկության արժեքը բացակայում է, ապա սյան անվանման մեջ կա 2 տող։


