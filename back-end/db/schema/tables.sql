-- Drop and recreate Users table (Example)


/* maintenance_issues Table */
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles (
  id SERIAL PRIMARY KEY NOT NULL,
  role VARCHAR(255) NOT NULL
);

/* users Table */
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
  active BOOLEAN DEFAULT true,
  start_date TIMESTAMP DEFAULT NOW(),
  end_date TIMESTAMP DEFAULT NULL
);
/* properties Table */
DROP TABLE IF EXISTS properties CASCADE;
CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  property_manager_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  unit VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  property_type VARCHAR(255) NOT NULL,
  image_path TEXT DEFAULT NULL
);

/* users_properties Table */
DROP TABLE IF EXISTS users_properties CASCADE;
CREATE TABLE users_properties (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


/* ticket_statuses Table */
DROP TABLE IF EXISTS ticket_statuses CASCADE;
CREATE TABLE ticket_statuses (
  id SERIAL PRIMARY KEY NOT NULL,
  status VARCHAR(255) NOT NULL 
);


/* maintenance_issues Table */
DROP TABLE IF EXISTS maintenance_issues CASCADE;
CREATE TABLE maintenance_issues (
  id SERIAL PRIMARY KEY NOT NULL,
  maintenance_type VARCHAR(255) NOT NULL 
);


/* tickets Table */
DROP TABLE IF EXISTS tickets CASCADE;
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  employee_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  maintenance_type_id INTEGER REFERENCES maintenance_issues(id) ON DELETE CASCADE,
  ticket_status_id INTEGER REFERENCES ticket_statuses(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  actual_cost INTEGER DEFAULT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP DEFAULT NULL,
  image_path TEXT DEFAULT NULL
);






