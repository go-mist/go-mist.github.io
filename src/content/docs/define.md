---
title: Define a table
description: Put columns on a struct and the table name on Table.
---

Columns live on a struct. The table name lives on `Table()`.

```go
package schema

import (
	"time"

	"github.com/go-mist/mist"
)

//go:generate mist generate

type User struct {
	ID        int64     `mist:"id,pk"`
	Name      string    `mist:"name,notnull"`
	Email     *string   `mist:"email,unique"`
	CreatedAt time.Time `mist:"created_at,notnull,defaultnow"`
}

func (User) Table() mist.TableMeta { return mist.TableMeta{Name: "users"} }
```

A pointer column is nullable. A missing SQL type is filled from the Go type: `int64` is `bigint`, `string` is `text`, `bool` is `boolean`, `time.Time` is `timestamp`, `[]byte` is `bytea`.

Write the SQL type when you want a specific one: `mist:"id,bigserial,pk"`, `mist:"created_at,timestamptz,notnull,default=now()"`.

`Table()` may return `pg.TableMeta` or `mysql.TableMeta`. Those generate that dialect's columns and codecs. `mist.TableMeta` generates `mist.Col` and no codec. One directory uses one of the three.

This describes the table. It does not create it.

Next: [Generate](../generate/).
