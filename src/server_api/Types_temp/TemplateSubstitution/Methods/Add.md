---
title: Add
nav_exclude: true
---

# TemplateSubstitution.Add մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Add(string, string)](#templatesubstitutionaddstring-string-մեթոդ)| Ավելացնում է ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, object)](#templatesubstitutionaddstring-object-մեթոդ)| Ավելացնում է **object** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, bool)](#templatesubstitutionaddstring-bool-մեթոդ)| Ավելացնում է **bool** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, byte)](#templatesubstitutionaddstring-byte-մեթոդ)| Ավելացնում է **byte** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, char)](#templatesubstitutionaddstring-char-մեթոդ)| Ավելացնում է **char** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, decimal)](#templatesubstitutionaddstring-decimal-մեթոդ)| Ավելացնում է **decimal** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, double)](#templatesubstitutionaddstring-double-մեթոդ)| Ավելացնում է **double** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, float)](#templatesubstitutionaddstring-float-մեթոդ)| Ավելացնում է **float** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, int)](#templatesubstitutionaddstring-int-մեթոդ)| Ավելացնում է **int** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, long)](#templatesubstitutionaddstring-long-մեթոդ)| Ավելացնում է **long** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, short)](#templatesubstitutionaddstring-short-մեթոդ)| Ավելացնում է **short** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, DateTime)](#templatesubstitutionaddstring-datetime-մեթոդ)| Ավելացնում է **DateTime** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, DateTime?)](#templatesubstitutionaddstring-datetime-մեթոդ)| Ավելացնում է **DateTime?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, TimeSpan?)](#templatesubstitutionaddstring-timespan-մեթոդ)| Ավելացնում է **TimeSpan?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |

### TemplateSubstitution.Add(string, string) մեթոդ

```c#
public void Add(string code, string value)
```

Ավելացնում է ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | string | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, object) մեթոդ

```c#
public void Add(string code, object value)
```

Ավելացնում է **object** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | object | - | Տեղադրվող արժեքը։ |

**Օրինակ**

```c#
public async Task<TemplateSubstitution> InnerSubstitute(Document doc)
{
    var result = new TemplateSubstitution();
    result.Add("001", doc["DocNum"].Value);
    result.Add("103", doc["Address"].Value);
    return result;
}
```

### TemplateSubstitution.Add(string, bool) մեթոդ

```c#
public void Add(string code, bool value)
```

Ավելացնում է **bool** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | bool | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, byte) մեթոդ

```c#
public void Add(string code, byte value)
```

Ավելացնում է **byte** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | byte | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, char) մեթոդ

```c#
public void Add(string code, char value)
```

Ավելացնում է **char** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | char | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, decimal) մեթոդ

```c#
public void Add(string code, decimal value)
```

Ավելացնում է **decimal** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | decimal | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, double) մեթոդ

```c#
public void Add(string code, double value)
```

Ավելացնում է **double** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | double | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, float) մեթոդ

```c#
public void Add(string code, float value)
```

Ավելացնում է **float** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | float | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, int) մեթոդ

```c#
public void Add(string code, int value)
```

Ավելացնում է **int** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | int | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, long) մեթոդ

```c#
public void Add(string code, long value)
```

Ավելացնում է **long** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | long | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, short) մեթոդ

```c#
public void Add(string code, short value)
```

Ավելացնում է **short** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | short | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, DateTime) մեթոդ

```c#
public void Add(string code, DateTime value)
```

Ավելացնում է **DateTime** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | DateTime | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, DateTime?) մեթոդ

```c#
public void Add(string code, DateTime? value)
```

Ավելացնում է **DateTime?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | DateTime? | - | Տեղադրվող արժեքը։ |

### TemplateSubstitution.Add(string, TimeSpan?) մեթոդ

```c#
public void Add(string code, TimeSpan? value)
```

Ավելացնում է **TimeSpan?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | TimeSpan? | - | Տեղադրվող արժեքը։ |
