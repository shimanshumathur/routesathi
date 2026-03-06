CREATE TABLE users (
id SERIAL PRIMARY KEY,
email TEXT,
password TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trips (
id SERIAL PRIMARY KEY,
start_city TEXT,
end_city TEXT,
halt_city TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);