CREATE TABLE Users(
    ID serial PRIMARY KEY,
    Name VARCHAR (30) NOT NULL,
    Surname VARCHAR (30) NOT NULL,
    PhoneNumber VARCHAR(9) CHECK (PhoneNumber SIMILAR TO '[1-9][0-9]{8}'),
    Email VARCHAR (50) NOT NULL CHECK (Email SIMILAR TO '[a-z0-9.-_]+@[a-z.]+')
);

CREATE TABLE Account(
    ID serial PRIMARY KEY,
    Login VARCHAR (30) UNIQUE NOT NULL,
    Password VARCHAR (50) NOT NULL,
    UserID INTEGER NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users (ID)
);

CREATE TABLE Events(
    ID serial PRIMARY KEY,
    Name VARCHAR (80) NOT NULL,
    Type VARCHAR (40) NOT NULL,
    Date DATE NOT NULL DEFAULT CURRENT_DATE,
    Time TIME NOT NULL,
    City VARCHAR (40) NOT NULL,
    Location VARCHAR (40) NOT NULL,
    Street VARCHAR (40),
    StNumber INTEGER,
    CreatorID INTEGER NOT NULL,
    FOREIGN KEY (CreatorID) REFERENCES Users (ID)
);

CREATE TABLE Members(
    ID serial PRIMARY KEY,
    EventID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users (ID),
    FOREIGN KEY (EventID) REFERENCES Events (ID)
);

INSERT INTO Users ( Name, Surname, PhoneNumber, Email)
VALUES ('Stanislaw', 'Talerzyk', '534057309', 'stalerzyk12341@gmail.com');

INSERT INTO Events (Name, Type, Date, Time, City, Location, Street, StNumber, CreatorID)
VALUES ('Pileczka z ziomkami', 'Gra w pilke', '2020-08-09', '9:00', 'Pulawy', '51.413361, 21.985881', 'Batalionow Chlopskich', '5', '1');

INSERT INTO Account (Login, Password, UserID)
VALUES ('Mirekpenia9', 'mamaitata', 1);

INSERT INTO Members (EventID, UserID)
VALUES (1, 1);