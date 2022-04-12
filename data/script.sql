create table turnos(
	id serial primary key,
	nombre varchar not null
);

create table lenguajes(
	id serial primary key,
	nombre varchar not null
);

create table bootcamps(
	id serial primary key,
	codigo varchar not null unique,
	agno int not null,
	lenguaje_id int not null,
	turno_id int not null,
	foreign key (lenguaje_id) references lenguajes (id),
	foreign key (turno_id) references turnos (id),
	unique (agno, lenguaje_id, turno_id)
);

insert into turnos (nombre) values ('diurno'), ('vespertino');

insert into lenguajes (nombre) values ('JavaScript'), ('Java'), ('Python');