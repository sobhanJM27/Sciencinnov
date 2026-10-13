CREATE TABLE IF NOT EXISTS consultation_requests (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name   VARCHAR(100) NOT NULL,
  phone       VARCHAR(20)  NOT NULL,
  age         TINYINT UNSIGNED NULL,
  source      ENUM('popup', 'footer') NOT NULL,
  status      ENUM('new', 'contacted', 'closed') NOT NULL DEFAULT 'new',
  email_sent  TINYINT(1) NOT NULL DEFAULT 0,
  ip_address  VARCHAR(45) NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_status_created (status, created_at),
  KEY idx_ip_created (ip_address, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;