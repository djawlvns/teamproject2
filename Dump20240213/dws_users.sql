-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: dws
-- ------------------------------------------------------
-- Server version	8.2.0

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

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `activated` bit(1) DEFAULT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` enum('MAN','WOMAN') NOT NULL,
  `login_id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_member_login_id` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '','1999-04-19','dup1234@naver.com','MAN','dup06166','김민교','$2a$10$ZifGsmn4MXbupsam7yISoO43AsN5YegSmqW/ZmsrZmjPK8.ggRreq'),(2,_binary '','1997-04-25','dbvc123@naver.com','MAN','abc00123','이상호','$2a$10$MML58aZCTGajCRIBiQvr.efKd6tQYxVnZ.KPtSPmrR8d.P1pcSmJC'),(3,_binary '','1988-12-10','kkan@naver.com','MAN','kbj12','김봉준','$2a$10$GeyX3RAuAzwRSMIazWesH.qteTztRUKe69FMt9sbjHrGPU7XqXwx6'),(4,_binary '','1992-01-25','c9@naver.com','MAN','hitr1544','김예준','$2a$10$Ly1U9U07Ud.vX7/gQwakfOQd1IZuD4Ik3T.vvV.8xFBJ3nJA8LFa2'),(5,_binary '','1997-02-11','rose97@naver.com','WOMAN','dup06167','박채영','$2a$10$nQgAnV2LVn2lmH/Sz8BRy.V/NkQnqjU6xrKRP41QwnZa8fYs9ZigS'),(6,_binary '','1970-01-22','handh@naver.com','MAN','dup06168','한동훈','$2a$10$8MtYCdXuVV/JGkLQE5gSde8zOFcJflda9Dy.YkGQpi0wV3/jmz4U2');
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

-- Dump completed on 2024-02-13 14:04:46
