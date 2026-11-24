---
title: Install
description: Add mist to a Go module.
---

Add the module, and install the generator:

```
go get github.com/go-mist/mist
go install github.com/go-mist/mist/cmd/mist@latest
```

The database driver you import depends on the dialect. The root package does not import one.

Next: [Define a table](/define/).
