---
title: Dialects
description: What each database package accepts.
---

Six packages live under `github.com/go-mist/mist/dialect/`. HighGo and KingbaseES use `pg`. MariaDB uses `mysql`.

## PostgreSQL

`returning`, `on conflict`, `distinct on`, `full join`, and `lateral` are written as PostgreSQL. Migrations run in one transaction.

## MySQL

`on duplicate key update` and `insert ignore` have their own methods. `returning`, `on conflict`, `full join`, and `distinct on` return an error.

## MariaDB

Same package and same SQL as MySQL. `FindMany` writes `LATERAL`, which current MariaDB rejects. A `JSON` column reads back as `longtext` plus a `json_valid` check.

## SQLite

The driver is compiled into the binary. `CGO_ENABLED=0` is enough. `distinct on`, `for update`, and `on duplicate key update` return an error.

## Oracle

Joins, `group by`, `having`, `distinct`, `with`, set operations, `for update`, and `insert select` run. `returning`, `on conflict`, and a multi-row `values` list return an error. DDL is not wrapped in a transaction.

## SQL Server

Brackets, `@p1`, `TOP`, `OUTPUT`, and `OFFSET` / `FETCH`. `returning` stays an error and is not rewritten as `OUTPUT`. `on conflict` and `for update` return an error.

## Dameng

Double quotes, `?`, `LIMIT` / `OFFSET`, and `WITH`. The `RECURSIVE` keyword is rejected, so a recursive query is written as plain `WITH`. `returning` is not rewritten as `RETURNING INTO`. `on conflict` is not rewritten as `MERGE`. `FindMany` is not implemented. Migration, `ddl`, and `push` have not been run on a Dameng server.

## HighGo

Same SQL as PostgreSQL. Connect with `pg.Open` and a URL on port `5866`. pgx does not speak SM3, so a server that requires it fails at connect. These statements have not been run on a HighGo server.

## KingbaseES

The build tested here is V008R003C002B0320, port `54321`, user `SYSTEM`, authentication `md5`. `pg.Open` connected. `returning`, `on conflict`, `with recursive`, and `$1` ran. On that server `'A' = 'a'` is true. `sm3` was not tested.
