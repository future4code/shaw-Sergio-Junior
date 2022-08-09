CREATE DATABASE  IF NOT EXISTS `shaw-21815255-junior` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shaw-21815255-junior`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 35.226.146.116    Database: shaw-21815255-junior
-- ------------------------------------------------------
-- Server version	8.0.18-google

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6e9dd005-5453-11eb-8672-42010a800191:1-9768680';

--
-- Table structure for table `bike_storage`
--

DROP TABLE IF EXISTS `bike_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bike_storage` (
  `id` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `speeds` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bike_storage`
--

LOCK TABLES `bike_storage` WRITE;
/*!40000 ALTER TABLE `bike_storage` DISABLE KEYS */;
INSERT INTO `bike_storage` VALUES ('15581bec-aa93-4cfc-909f-20a358121b58','Black',3,'Bentley','Classic',106500),('37e7f8c4-d347-4b50-9739-7e097db85832','Yellow',24,'caloi','Cross Country',15600),('4df2de15-fd2c-484a-b727-74daec96baf5','Red',24,'GTS','Down Hill',11780),('66120d26-7df7-4520-b642-2725d117ce68','Dark',7,'GTS','Speed',3990),('9ac3df77-2e26-41bd-aa76-c79c57c4399f','Purple',6,'Fuji','Nevada',4690),('a77c80c8-1528-4e11-9b64-e72a2875c43c','Blue',23,'caloi','Vintage',9590),('c9eb26e8-b3a4-4eed-b579-98585dd4307b','Green',7,'Canoon','Speed',2050),('df3ac090-96a6-4376-a52f-328681adeed3','Blue',23,'caloi','Vintage',981);
/*!40000 ALTER TABLE `bike_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sold_bikes`
--

DROP TABLE IF EXISTS `sold_bikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sold_bikes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bike_id` varchar(255) DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `speeds` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `sold_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sold_bikes`
--

LOCK TABLES `sold_bikes` WRITE;
/*!40000 ALTER TABLE `sold_bikes` DISABLE KEYS */;
INSERT INTO `sold_bikes` VALUES (1,'68aac27a-c1bc-4560-8aea-8e6e4c4c6e31','Blue',23,'caloi','Vintage',9590,'2022-07-08 05:14:28'),(2,'89d148c3-6d27-4fd7-ac94-ff0ab31cc31c','Red',23,'caloi','Vintage',9590,'2022-07-08 21:25:08'),(3,'1ffe2f5a-cab3-44b1-8001-1058f7448371','Blue',30,'Fuji','Speed',3990,'2022-07-11 10:16:36');
/*!40000 ALTER TABLE `sold_bikes` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 11:27:06
