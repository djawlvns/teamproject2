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
-- Table structure for table `vods`
--

DROP TABLE IF EXISTS `vods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vods` (
  `vod_id` bigint NOT NULL AUTO_INCREMENT,
  `date` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`vod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vods`
--

LOCK TABLES `vods` WRITE;
/*!40000 ALTER TABLE `vods` DISABLE KEYS */;
INSERT INTO `vods` VALUES (1,'2024-01-08','Github','https://blog.kakaocdn.net/dn/Kl0e8/btqCzADnGSi/fC7tMdoSp6oGS8L2K429V1/img.png','깃허브 기초개념','https://www.youtube.com/watch?v=YFNQwo7iTNc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=7'),(2,'2024-01-08','python','https://i.namu.wiki/i/UQ4Z4PUPCmqehhTE6taz1IZsu1v78BY5x2oGZAcPz0w36aZPQn5k4BDYHr0TKyQVZv75OwPTXeGpCIgSnvIy_g.svg','파이썬 강의','https://www.youtube.com/watch?v=1-O4O0z4tRQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=10'),(3,'2024-01-08','Java script','https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-javascript-webfrontend.jpg','자바스크립트란?','https://www.youtube.com/watch?v=NMHQkAS7XEc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=23'),(4,'2024-01-08','라이브러리,프레임워크','https://cdn.inflearn.com/public/courses/327598/cover/feec6bfd-abaa-4972-9c88-7dd13ed57c32/327598-eng.png','라이브러리와프레임워크','https://www.youtube.com/watch?v=t9ccIykXTCM&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=24'),(5,'2024-01-08','SQL,NoSQL','https://appmaster.io/api/_files/yKhnAuhLKWr9i83vVB3um7/download/','SQL vs NoSQL','https://www.youtube.com/watch?v=Q_9cFgzZr8Q&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=39'),(6,'2024-01-08','Rest Api','https://miro.medium.com/v2/re                                                        size:fit:700/0*PSxcvFBVaufSCuwt.png','Rest Api설계','https://www.youtube.com/watch?v=4DxHX95Lq2U&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=41'),(7,'2024-01-08','Node JS','https://www.freecodecamp.org/news/content/images/2022/11/What-is.png','Node JS쉽게알기','https://www.youtube.com/watch?v=h_t7ZT-nbIQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=55'),(8,'2024-01-08','C,C#,C++','https://i.ytimg.com/vi/sNMtjs_wQiE/sddefault.jpg','C,C#,C++ 차이점','https://www.youtube.com/watch?v=zGrTT4k1-yc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=1');
/*!40000 ALTER TABLE `vods` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-13 14:04:47
