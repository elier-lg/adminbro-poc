CREATE DATABASE "Test1"
    
CREATE TABLE public."Employees"
(
    "firstName" text COLLATE pg_catalog."default",
    "lastName" text COLLATE pg_catalog."default",
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    "createdAt" text COLLATE pg_catalog."default",
    "updatedAt" text COLLATE pg_catalog."default",
    "isOnBench" boolean,
    entitlement text COLLATE pg_catalog."default",
    gender text COLLATE pg_catalog."default",
    "linkedIn" text COLLATE pg_catalog."default",
    "hiringRank" real,
    "billRate" money,
    "isBillable" boolean,
    education text COLLATE pg_catalog."default",
    "employeeType" smallint,
    source text COLLATE pg_catalog."default",
    "leverLink" text COLLATE pg_catalog."default",
    "onBoardingStatus" text COLLATE pg_catalog."default",
    "backGroundCheckStatus" smallint,
    CONSTRAINT "Employee_pkey" PRIMARY KEY (id)
)