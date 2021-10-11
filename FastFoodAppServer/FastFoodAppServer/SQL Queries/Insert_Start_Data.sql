/* For at indsætte dummy data i serveren*/

USE FastFoodAppServer

INSERT INTO [Status] VALUES ('Bestilt')
INSERT INTO [Status] VALUES ('Bekræftet')
INSERT INTO [Status] VALUES ('Ude til levering')
INSERT INTO [Status] VALUES ('Leveret')

INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','burger','10')
INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','pizza','10')
INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','burger','10')
INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','pizza','10')
INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','pizza','10')
INSERT INTO Accessory ([Name], Category, PriceOfItem) VALUES ('Skinke','burger','10')

INSERT INTO Products VALUES ( 'Burger', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'Big Burger', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'Hello', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'Pizza', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'dwazxc', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'zxczxc', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'awdaw', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'xzc', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'dwadaw', 95, 'A burger', '1,2,3,4')
INSERT INTO Products VALUES ( 'zcxxzcxsa', 95, 'A burger', '1,2,3,4')

INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('dawadwd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)
INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('daawdwd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)
INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('ddawdawd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)
INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('daaaaawdwd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)
INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('dadawdwd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)
INSERT INTO AspNetUsers (Id, UserName, Email, PasswordHash, AccessFailedCount, PhoneNumberConfirmed, EmailConfirmed, TwoFactorEnabled, LockoutEnabled) VALUES 
('daadwd@hotmail.com' ,'Jakob', 'dawd@hotmail.com', 'adawdadawkjjgnrgjsrdgkdrgjkdrgnjkfnaskaw', 0, 0, 0, 0, 0)

INSERT INTO Customers VALUES ('Vardevej 12', 'dawadwd@hotmail.com', 'dawadwd@hotmail.com')
INSERT INTO Customers VALUES ('Vardevej 1s2', 'daawdwd@hotmail.com', 'daawdwd@hotmail.com')
INSERT INTO Customers VALUES ('Vardevej wa12', 'ddawdawd@hotmail.com', 'ddawdawd@hotmail.com')
INSERT INTO Customers VALUES ('Vardevej 1212', 'aaaaawdwd@hotmail.com', 'aaaaawdwd@hotmail.com')

INSERT INTO Orders VALUES ('dawadwd@hotmail.com', CURRENT_TIMESTAMP, 1)
INSERT INTO Orders VALUES ('daawdwd@hotmail.com', CURRENT_TIMESTAMP, 1)
INSERT INTO Orders VALUES ('ddawdawd@hotmail.com', CURRENT_TIMESTAMP, 1)
INSERT INTO Orders VALUES ('aaaaawdwd@hotmail.com', CURRENT_TIMESTAMP, 1)


INSERT INTO OrderLines VALUES (1, 1, 2, 550, '1,2,3,3')
INSERT INTO OrderLines VALUES (1, 2, 2, 520, '1,2,3,3')
INSERT INTO OrderLines VALUES (1, 3, 2, 501, '1,2,3,3')
INSERT INTO OrderLines VALUES (2, 1, 2, 502, '1,2,3,3')
INSERT INTO OrderLines VALUES (2, 2, 2, 530, '1,2,3,3')
INSERT INTO OrderLines VALUES (3, 3, 2, 501, '1,2,3,3')
