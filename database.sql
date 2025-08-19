-- BNS&P Database
-- Simplified database structure for BNS&P application

-- Create the database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS `BNS&P`;
USE `BNS&P`;

-- Contacts table (based on contact form)
CREATE TABLE IF NOT EXISTS contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Helpful index for email lookups
CREATE INDEX idx_contacts_email ON contacts(email);

