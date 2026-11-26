---
title: Migrate
description: Apply a folder of forward migrations.
---

`migrate.Run` applies directories whose names are not yet in the migration table. Each directory holds `up.sql`, `down.sql`, and `snapshot.json`. `Run` applies `up.sql`. `migrate.Down` runs the latest applied `down.sql` and deletes that row. `DownTo` keeps the named migration and rolls back every later one. `down.sql` is handwritten. A placeholder, or a file with no statements, is refused and the row stays. The hash is the bytes of `up.sql`.

```
mist ddl -dir . -migrations migrations -write -name init
mist migrate -migrations migrations
mist down -migrations migrations
mist down -migrations migrations -to 20261123135846_init
mist down -migrations migrations -all
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
