---
title: From sqlc
description: Generated scan functions, with the SQL in Go.
---

sqlc reads `query.sql` and generates a function per query. mist reads the table struct and generates the column descriptors and `Scan`. You write the statement with the builder.

| sqlc | mist |
|---|---|
| `schema.sql` | struct tags, then `mist generate` |
| `query.sql` | `Insert`, `Select`, `Update`, `Delete` |
| `:one` | `One` |
| `:many` | `All` |
| `:exec` | `Exec` |
| `:execrows` | `Exec`, and the returned count |
| `sqlc.narg` | pass the value, including a pointer for NULL |
| goose or atlas for migrations | `mist ddl` and `mist migrate` |

A query that returns one optional row uses `One`, which returns `query.ErrNoRows` when the result is empty. `Take` keeps the first row when several match.

sqlc names each query. mist does not. The call is the query.

Generated code is the table, the columns, and `Scan`. It is not a repository.

Next: [Generate](../generate/).
