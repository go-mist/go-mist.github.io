---
title: Migrate
description: Apply a folder of forward migrations.
---

`migrate.Run` applies directories whose names are not yet in the migration table. Each directory holds `up.sql`, `down.sql`, and `snapshot.json`. `Run` applies `up.sql`. `down.sql` is reserved and is not applied. The hash is the bytes of `up.sql`.

```
mist ddl -dir . -migrations migrations -write -name init
mist migrate -migrations migrations
```

Each migration is a directory:

```
migrations/20261123135846_init/up.sql
migrations/20261123135846_init/down.sql
migrations/20261123135846_init/snapshot.json
```

From Go:

```go
applied, err := migrate.Run(ctx, pg.Migrator(db), migrate.Config{
	Folder: "migrations",
})
```

`Config.FS` reads that directory from an `fs.FS`, including `embed.FS`. `Folder` is the directory inside the filesystem. `ddl -write` still writes the files to disk before the program is built.

```go
//go:embed all:migrations
var migrations embed.FS

applied, err := migrate.Run(ctx, pg.Migrator(db), migrate.Config{
	FS:     migrations,
	Folder: "migrations",
})
```

A statement that fails rolls the whole batch back on PostgreSQL, HighGo, SQLite, and SQL Server. MySQL and MariaDB commit each DDL statement, so earlier statements in that migration can remain. Oracle and Dameng do not wrap DDL in a transaction.

Changing an already applied `up.sql` makes `Run` return `HashError`. Leave the old directory as it is.

Next: [Dialects](../dialects/).
