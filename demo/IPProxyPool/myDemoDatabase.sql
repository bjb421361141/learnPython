--- 创建数据库、用户 并给用户授权
CREATE DATABASE CRAWL_DB;
CREATE USER 'crawl'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON CRAWL_DB.* TO crawl;
FLUSH PRIVILEGES


--- 创建表
--ip代理池信息表
create table proxy_ip (
  no BIGINT AUTO_INCREMENT,
  ip VARCHAR(20) UNIQUE NOT NULL,
  port VARCHAR(255) NOT NULL,
  address VARCHAR(20) DEFAULT '',
  proxy_type VARCHAR(5),
  speed DECIMAL DEFAULT 0,
  PRIMARY KEY (no)
) DEFAULT CHARSET = utf8;