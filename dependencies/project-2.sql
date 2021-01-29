CREATE TABLE `users` (
    `UUID` VARCHAR(255) NOT NULL UNIQUE,
    `ID` INT(11) NOT NULL AUTO_INCREMENT UNIQUE
);

CREATE TABLE `personal` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `resumePicture` VARCHAR(255),
    `firstName` VARCHAR(30),
    `lastName` VARCHAR(30),
    `adress` VARCHAR(60),
    `zipcode` VARCHAR(20),
    `city` VARCHAR(60),
    `phoneNumber` VARCHAR(30),
    `email` VARCHAR(100),
    `dayOfBirth` VARCHAR(10),
    `nationality` VARCHAR(60),
    PRIMARY KEY (ID)
);

INSERT INTO `personal` (`ID`, `resumePicture`, `firstName`, `lastName`, `adress`, `zipcode`, `city`, `phoneNumber`, `email`, `dayOfBirth`, `nationality`) VALUES
(1, 'dependencies/img/default-pp.png', 'Karel', 'Ratbier', 'Voorbeeldweg 25-A', '1234 AB', 'Amsterdam', '+31648534850', 'k.ratbier@outlook.com', '28.02.2002', 'Nederlandse');

CREATE TABLE `workExperience` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `workStartDate1` VARCHAR(7),
    `workEndDate1` VARCHAR(7),
    `company1` VARCHAR(100),
    `jobDescription1` VARCHAR(100),
    `workStartDate2` VARCHAR(7),
    `workEndDate2` VARCHAR(7),
    `company2` VARCHAR(100),
    `jobDescription2` VARCHAR(100),
    `workStartDate3` VARCHAR(7),
    `workEndDate3` VARCHAR(7),
    `company3` VARCHAR(100),
    `jobDescription3` VARCHAR(100),
    `workExperienceTotal` INT(3),
    PRIMARY KEY (ID)
);

CREATE TABLE `education` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `eduStartDate1` VARCHAR(7),
    `eduEndDate1` VARCHAR(7),
    `schoolDate1` VARCHAR(100),
    `education1` VARCHAR(100),
    `eduStartDate2` VARCHAR(7),
    `eduEndDate2` VARCHAR(7),
    `schoolDate2` VARCHAR(100),
    `education2` VARCHAR(100),
    `eduStartDate3` VARCHAR(7),
    `eduEndDate3` VARCHAR(7),
    `schoolDate3` VARCHAR(100),
    `education3` VARCHAR(100),
    `educationTotal` INT(3),
    PRIMARY KEY (ID)
);

CREATE TABLE `skills` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `skillValues` VARCHAR(255),
    `skillName` VARCHAR(100),
    PRIMARY KEY (ID)
);

CREATE TABLE `workflow` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `text` TEXT,
    PRIMARY KEY (ID)
);

CREATE TABLE `projects` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `projectName1` VARCHAR(100),
    `projectIMG1` VARCHAR(255),
    `projectName2` VARCHAR(100),
    `projectIMG2` VARCHAR(255),
    `projectsTotal` INT(3),
    PRIMARY KEY (ID)
);

CREATE TABLE `hobbies` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `hobbyIcon1` VARCHAR(50),
    `hobbyName1` VARCHAR(50),
    `hobbyIcon2` VARCHAR(50),
    `hobbyName2` VARCHAR(50),
    `hobbyIcon3` VARCHAR(50),
    `hobbyName3` VARCHAR(50),
    PRIMARY KEY (ID)
);

CREATE TABLE `links` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `github` VARCHAR(255),
    `codepen` VARCHAR(255),
    `behance` VARCHAR(255),
    `linkedin` VARCHAR(255),
    PRIMARY KEY (ID)
);