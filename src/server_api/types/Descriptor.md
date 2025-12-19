---
layout: page
title: "Descriptor դաս" 
---

Դասը նախատեսված է համակարգային պարամետրի նկարագրման համար։

Օգտագործվում է [IParametersService](../services/IParametersService.md).[GetDescriptor](../services/IParametersService/Methods/GetDescriptor.md) մեթոդում։

```c#
public sealed class Descriptor
{
    public string ParamID { get; private set; }
    public string ASType { get; private set; }
    public bool UserParam { get; private set; }
    public string SerializedValue { get; internal set; }
    public bool UseFromCache { get; private set; }
    public string Kind { get; private set; }
    public string Group { get; private set; }
    public string Description { get; private set; }
    public string EnglishDescription { get; private set; }
    public FieldType FieldType { get; private set; }
    public string UpAccess { get; private set; }    
}
```

## Հատկություններ

| Անվանում           | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն  |
| ------------------ | ------------- | --------------- | --------------- |
| ParamID            | string        |       -          | Պարամետրի ներքին անունը (id)։ |
| ASType             | string        |       -          | Պարամետրի [4X-ական համակարգային տիպը](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/types.html)։ |
| UserParam          | bool          |       -          | Ցույց է տալիս, արդյոք պարամետրը ըստ օգտագործողի է, թե ոչ։ |
| SerializedValue    | string        |      -           | Պարամետրի արժեքը։ |
| UseFromCache       | bool          |      -           | Պարամետրի քեշում պահման և քեշից արժեքը կարդալու հայտանիշ։ |
| Kind               | string        |       -          | Պարամետրի խումբը։ |
| Group              | string        |      -           | Պարամետրի խումբը, որը ընդունում է արժեքներ **PARGROUP** ծառից։ |
| Description        | string        |        -         | Պարամետրի հայերեն նկարագրությունը։ |
| EnglishDescription | string        |        -         | Պարամետրի անգլերեն նկարագրությունը։ |
| FieldType          | FieldType     |        -         | Պարամետրի [համակարգային տիպը](system_types.md)։  |
| UpAccess           | string        |         -        | Պարամետրի խմբագրման թույլտվություն։ 0 - Խմբագրում թույլ չի տրվում Համակարգի պարամետրերի ուղղորդիչից։ 1 - Խմբագրում թույլ է տրվում միայն ադմինիստրատորին։ 2 - Խմբագրում թույլ է տրվում բոլոր օգտագործողներն։ |