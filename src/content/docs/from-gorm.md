---
title: From GORM
description: The same jobs, written as SQL.
---

GORM hides the statement behind a model. mist keeps the statement in the call.

| GORM | mist |
|---|---|
| `gorm.Open` | `pg.Open`, `mysql.Open`, `sqlite.Open`, `oracle.Open`, `mssql.Open`, or `dm.Open` |
| struct tags and `AutoMigrate` | tags on the struct, then `mist generate` and `mist ddl` / `mist migrate` |
| `db.Create(&user)` | `Insert(Users).Columns(...).Values(...).Exec` |
| `db.First(&user, id)` | `Select(...).From(Users).Where(op.Eq(Users.ID, id)).One` |
| `db.Find(&users)` | `Select(...).From(Users).All` |
| `db.Where("name = ?", name)` | `Where(op.Eq(Users.Name, name))` |
| `Preload("Posts")` | `FindMany` on that dialect |
| `db.Model(&user).Updates(...)` | `Update(Users).Set(...).Where(...).Exec` |
| `db.Delete(&user)` | `Delete(Users).Where(...).Exec` |
| `db.Transaction` | `db.Tx` |

A column you do not pass is absent from the statement. Zero is a real value: `Set(Users.Age, 0)` writes `0`.

`created_at` stays a database default (`defaultnow`) and stays out of `Columns()`. `updated_at`, `created_by`, and `updated_by` are `Set` at the call.

`Update` and `Delete` refuse to run without `Where`. `AllRows()` is the full-table write.

Soft delete, a tenant id, and a data-scope predicate are `Where` conditions you write. There is no callback that rewrites the statement after it is built.

Next: [Define a table](../define/).
