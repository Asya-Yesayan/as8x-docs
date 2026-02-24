---
layout: page
title: "DeserializeComplexObjectsEventArgs դաս"
nav_exclude: true
---

# DeserializeComplexObjectsEventArgs դաս

Այս դասը օգտագործվում է [Document.DeserializeComplexObjects](../../Definitions/Document/Methods/DeserializeComplexObjects.md) մեթոդում։

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| ComplexObjectsJson | Dictionary<string, JsonElement> | - | Կլիենտից սերվիս փոխանցվող բարդ օբյեկտների (ներդրված տիպեր չհանդիսացող, string, bool, ...) անուն/արժեքների ցուցակ։ արժեքների դեսերիալիզացիան(C#-ական տիպերի բերումը) կատարվում է **DeserializeComplexObjectsEventArgs.Deserialize** մեթոդի միջոցով։  |