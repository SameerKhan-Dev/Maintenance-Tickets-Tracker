-- CREATE TABLE IF NOT EXISTS "users" (
--     "users_id" INT,
--     "users_first_name" TEXT,
--     "users_last_name" TEXT,
--     "users_email" TEXT,
--     "users_password" TEXT,
--     "users_role_id" INT,
--     "users_start_date" TEXT,
--     "users_end_date" TEXT
-- );

INSERT INTO "users" (firstname, lastname, email, password, role_id, start_date)
VALUES
    
    ('Drew','Mills','Pink.Wunsch@yahoo.com','password',1,'2015-04-14T03:50:56.268Z'),    /* PM */
    ('Frida','Padberg','Maci_Lehner@gmail.com','password',1,'2015-09-22T08:41:20.700Z'), /* PM */
    ('Temp','hello','Maci_Lehner@gmail.com','password',1,'2015-09-22T08:41:20.700Z'),   /*Pm  - USE THIS*/ 
    ('Celia','Kuvalis','Aiyana.Stracke@hotmail.com','password',2,'2015-10-13T17:58:48.011Z'), /* Tenant */
    ('Carrie','Kessler','Selena_Hane@gmail.com','password',2,'2018-09-10T09:30:40.397Z'), /* Tenant */
    ('Reva','Hilll','Sincere70@yahoo.com','password',2,'2017-12-18T01:16:04.626Z'), /* Tenant */
    ('Shayne','Lindgren','Jaron.Greenholt45@yahoo.com','password',2,'2018-12-23T12:02:33.829Z'), /* Tenant */
    ('Opal','Adams','Pearl_Spencer@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Mike','James','Mike_James@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Bryant','Vince','Bryant_Vince@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Kobe','Pearl','Kobe_Pearl@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Matthew','Harden','Matthew_Harden@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Jack','Harvey','Jack_Harvey@yahoo.com','password',2,'2016-06-12T08:03:52.569Z'), /* Tenant */
    ('Julio','Harvey','Benton35@gmail.com','password',3,'2019-01-10T22:45:05.783Z'), /* plumber */
    ('Rylan','O''Conner','Gerardo.Krajcik57@hotmail.com','password',3,'2017-07-04T03:13:44.223Z'), /* plumber */
    ('Rebecca','Schumm','Victoria98@yahoo.com','password',4,'2019-01-01T00:25:07.113Z'), /* electrician */
    ('Barrett','Lehner','Teresa_Monahan@hotmail.com','password',4,'2016-04-04T16:36:32.413Z'), /* electrician */
    ('Keon','Ankunding','Dorcas_Kulas@yahoo.com','password',5,'2016-09-08T05:42:28.509Z'), /* general-maintenance */
    ('Reynold','Boyer','Harold64@hotmail.com','password',5,'2018-06-18T13:28:53.282Z'),  /* general-maintenance */
    ('Mikel','Ruecker','Abe_Goodwin28@gmail.com','password',5,'2017-11-08T20:19:29.374Z'), /* general-maintenance */
    ('Tim','Ankunding','Dorcas_Kulas@yahoo.com','password',3,'2016-09-08T05:42:28.509Z'), /* OPTION general-maintenance */
    ('Mike','Boyer','Harold64@hotmail.com','password',4,'2018-06-18T13:28:53.282Z'),  /* OPTION general-maintenance */
    ('Roger','Ruecker','Abe_Goodwin28@gmail.com','password',4,'2017-11-08T20:19:29.374Z'); /* OPTION general-maintenance */
    