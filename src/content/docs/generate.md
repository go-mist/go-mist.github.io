---
title: Generate
description: Write column descriptors and the scan function.
---

`mist generate` reads the struct and writes the column descriptors and the scan function next to it. It does not run your program, and it does not create the table.

```
go generate ./...
```

The generated value for `User` is `Users`. Queries use `Users.ID` and `Users.Name`.

Next: [Connect](../connect/).
