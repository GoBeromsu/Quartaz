---
aliases: []
date_created: 2024-07-17
date_modified: 2024-07-17
permalink: what-is-extension-in-swift
tags:
  - swift
  - ios
title: "What is Extension in Swift"
---

![](/_attachments/medium-ba4a069b80f1-01.jpg)

*Photo by [Agung Raharja](https://unsplash.com/@agungraharja?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

In Swift, an `extension` is a powerful feature that allows you to add new functionality to an existing class, structure, enumeration, or protocol type without modifying the original source code. Extensions can add computed properties, methods, initializers, subscripts, and nested types to the existing type.

This is example of extension.

```swift
extension TimeModel {
    var timeFormatted: String {
        let minutes = timeRemaining / 60
        let seconds = timeRemaining % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }
}
```

## Breakdown

**Extension Declaration**

`extension TimeModel` declares an extension to the `TimeModel` type. This means you are adding new functionality to the `TimeModel` type.

**Computed Property**:

`var timeFormatted: String` is a computed property. It does not store a value directly but computes it on the fly whenever it is accessed.

Inside the computed property:

- `let minutes = timeRemaining / 60` calculates the minutes by dividing `timeRemaining` by 60.
- `let seconds = timeRemaining % 60` calculates the remaining seconds by taking the remainder of `timeRemaining` divided by 60.
- `return String(format: "%02d:%02d", minutes, seconds)` formats the minutes and seconds into a string in the "MM:SS" format, ensuring two digits for both minutes and seconds, padding with zeros if necessary.

## Purpose

In Swift, an `extension` is a feature that allows you to add new functionality to an existing class, structure, enumeration, or protocol type. This includes adding computed properties, methods, initializers, and even conforming to protocols. The primary purpose of extensions is to extend the capabilities of existing types without modifying their original source code.

The purpose of this extension is to add a computed property `timeFormatted` to the `TimeModel` type. This property provides a string representation of the remaining time in a formatted "MM:SS" format.

## Example Usage

Assuming `timeRemaining` is a property of `TimeModel`, you can use the `timeFormatted` property like this:

```swift
let timeModel = TimeModel()
timeModel.timeRemaining = 125 // for example
print(timeModel.timeFormatted) // Output: "02:05"
```

## Summary

- **Extension**: Allows you to add new functionality to existing types without modifying their original implementation.

This feature is useful for enhancing types with additional functionality while keeping your code organized and modular.

---

*2024-07-17에 [Medium](https://beromkoh.medium.com/what-is-extension-in-swift-ba4a069b80f1)에 쓴 글을 옮겼습니다.*
