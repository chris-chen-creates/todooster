-- +goose Up
-- +goose StatementBegin
CREATE TABLE Tasks(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  input VARCHAR(255) NOT NULL UNIQUE,
  is_complete BOOLEAN NOT NULL DEFAULT FALSE,
  created_by INT REFERENCES User(id),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT NULL
) -- 
-- +goose StatementEnd
-- +goose Down
-- +goose StatementBegin
DROP TABLE Tasks;
-- +goose StatementEnd