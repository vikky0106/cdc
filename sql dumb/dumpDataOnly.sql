CREATE DATABASE  IF NOT EXISTS `city` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `city`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: city
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `docter`
--

LOCK TABLES `docter` WRITE;
/*!40000 ALTER TABLE `docter` DISABLE KEYS */;
INSERT INTO `docter` VALUES (2,'Dr MaheshPatidar',9907929235,9907929235,'2017-03-22 00:51:38','MBBS'),(3,'Dr Rakesh Patidar',9907929235,9907929235,'2017-01-21 23:57:07','MBBS');
/*!40000 ALTER TABLE `docter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (3,'XYZ',25,'Male','City','2-Dr MaheshPatidar',2,250,'2017-01-22 11:16:00','2017-01-22 11:17:30'),(4,'XYZ',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-01-22 11:16:00','2017-01-22 11:17:35'),(5,'XYZ',25,'Male','City','3-Dr Rakesh Patidar',3,250,'2017-01-22 11:16:00','2017-01-22 11:17:39'),(6,'XYZ',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-01-22 11:16:00','2017-01-22 11:17:42'),(7,'vikas',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-01-31 23:09:00','2017-01-31 23:11:38'),(9,'updated Row',23,'Male','City','Dr MaheshPatidar',2,250,'2017-01-31 23:13:00','2017-03-22 00:20:42'),(10,'fsd',23,'Male','City','1-Dr Vikas Patidar',1,250,'2017-01-31 23:13:00','2017-01-31 23:15:59'),(11,'fsd',23,'Male','City','1-Dr Vikas Patidar',1,250,'2017-01-31 23:13:00','2017-01-31 23:17:40'),(12,'vikas',22,'Male','City','1-Dr Vikas Patidar',1,250,'2017-02-01 22:47:00','2017-02-01 22:47:41'),(13,'vikas Patidar',25,'Male','X-ray','1-Dr Vikas Patidar',1,250,'2017-02-01 23:12:00','2017-02-01 23:12:36'),(14,'vikas Patidar',25,'Male','X-ray','2-Dr MaheshPatidar',2,350,'2017-02-01 23:17:00','2017-02-01 23:18:08'),(15,'vikas Patidar',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-02-01 23:20:00','2017-02-01 23:20:54'),(16,'vikas',25,'Male','City','1-Dr Vikas Patidar',1,259,'2017-02-01 23:21:00','2017-02-01 23:21:26'),(17,'vikas',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-02-01 23:23:00','2017-02-01 23:23:21'),(18,'vikas',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-02-01 23:25:00','2017-02-01 23:25:16'),(19,'vikas',25,'Male','City','1-Dr Vikas Patidar',1,250,'2017-02-01 23:27:00','2017-02-01 23:27:25'),(20,'vikas Patidar',23,'Male','Mri','3-Dr Rakesh Patidar',3,350,'2017-03-09 21:37:00','2017-03-09 21:37:19'),(21,'vgdb',23,'Female','X-ray','Dr MaheshPatidar',2,235,'2017-03-19 16:22:00','2017-03-19 16:22:21'),(23,'Vikas Updated',23,'Male','Mri','Dr Vikas Patidar',1,123,'2017-03-20 23:30:00','2017-03-22 00:16:38'),(24,'sdfjk',22,'Female','X-ray','Dr MaheshPatidar',2,250,'2017-03-20 23:35:00','2017-03-20 23:35:10'),(25,'VIAKS',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 23:36:00','2017-03-20 23:36:09'),(26,'VIAKS',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 23:36:00','2017-03-20 23:37:24'),(27,'vikas',23,'Male','Mri','Dr Vikas Patidar',1,3000,'2017-03-20 23:39:00','2017-03-20 23:39:24'),(28,'Vikas Patidar',25,'Male','Mri','Dr MaheshPatidar',1,300,'2017-03-20 23:59:00','2017-03-22 00:23:30'),(29,'vikas Patidar',25,'Male','Mri','Dr MaheshPatidar',2,300,'2017-03-21 00:03:00','2017-03-21 00:03:56'),(30,'vikas patidar',25,'Male','Mri','Dr Vikas Patidar',1,3000,'2017-03-21 00:08:00','2017-03-21 00:08:37'),(31,'vikas patidar',25,'Male','City','Dr MaheshPatidar',2,300,'2017-03-21 00:10:00','2017-03-21 00:10:41'),(32,'vikas patidar',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 00:11:00','2017-03-21 00:11:14'),(33,'vikas',3,'Male','City','Dr Vikas Patidar',1,300,'2017-03-21 00:13:00','2017-03-21 00:13:12'),(34,'vikas',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 00:18:00','2017-03-21 00:18:36'),(35,'vikas',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 00:20:00','2017-03-21 00:20:26'),(36,'vikas Patidar',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 00:25:00','2017-03-21 00:25:22'),(37,'dd',21,'Male','X-ray','Dr Vikas Patidar',1,250,'2017-03-20 00:42:00','2017-03-21 00:42:42'),(38,'vikas Patidar',25,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 22:52:00','2017-03-21 22:53:13'),(39,'vikas Patidar',23,'Male','City','Dr Vikas Patidar',1,250,'2017-03-21 23:01:00','2017-03-21 23:01:11'),(40,'sdfjk',22,'Female','X-ray','Dr MaheshPatidar',1,250,'2017-03-22 00:00:00','2017-03-22 00:00:35');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'Mri',30),(2,'X-ray',30),(3,'City',30);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'vikky0106','123456','vikas','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-22  3:11:09
