-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    officer_id VARCHAR(100) UNIQUE,
    full_name VARCHAR(255),
    department VARCHAR(255),
    rank VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create criminals table for the database
CREATE TABLE IF NOT EXISTS criminals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    gender VARCHAR(20),
    location VARCHAR(255),
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(255),
    aadhar_number VARCHAR(12),
    pan_number VARCHAR(10),
    passport_number VARCHAR(20),
    driving_license VARCHAR(20),
    father_name VARCHAR(255),
    mother_name VARCHAR(255),
    occupation VARCHAR(255),
    education VARCHAR(255),
    marital_status VARCHAR(50),
    height_cm INTEGER,
    weight_kg INTEGER,
    blood_group VARCHAR(5),
    identifying_marks TEXT,
    photo_url VARCHAR(500),
    fingerprint_data TEXT,
    suspicion_rate INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'Under Investigation',
    last_seen_date DATE,
    last_seen_location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create crimes table
CREATE TABLE IF NOT EXISTS crimes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    severity_level INTEGER DEFAULT 1,
    description TEXT,
    ipc_section VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create criminal_crimes junction table
CREATE TABLE IF NOT EXISTS criminal_crimes (
    id SERIAL PRIMARY KEY,
    criminal_id INTEGER REFERENCES criminals(id) ON DELETE CASCADE,
    crime_id INTEGER REFERENCES crimes(id) ON DELETE CASCADE,
    case_number VARCHAR(100),
    fir_number VARCHAR(100),
    police_station VARCHAR(255),
    date_of_crime DATE,
    location_of_crime VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Under Investigation',
    description TEXT,
    evidence TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create case_files table
CREATE TABLE IF NOT EXISTS case_files (
    id SERIAL PRIMARY KEY,
    criminal_id INTEGER REFERENCES criminals(id) ON DELETE CASCADE,
    case_number VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255),
    description TEXT,
    investigating_officer VARCHAR(255),
    court_name VARCHAR(255),
    judge_name VARCHAR(255),
    lawyer_name VARCHAR(255),
    case_status VARCHAR(100) DEFAULT 'Open',
    filing_date DATE,
    hearing_date DATE,
    verdict TEXT,
    sentence TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create alerts table
CREATE TABLE IF NOT EXISTS alerts (
    id SERIAL PRIMARY KEY,
    criminal_id INTEGER REFERENCES criminals(id) ON DELETE CASCADE,
    alert_type VARCHAR(100),
    title VARCHAR(255),
    description TEXT,
    priority_level INTEGER DEFAULT 1,
    status VARCHAR(50) DEFAULT 'Active',
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_criminals_name ON criminals(name);
CREATE INDEX IF NOT EXISTS idx_criminals_location ON criminals(location);
CREATE INDEX IF NOT EXISTS idx_criminals_status ON criminals(status);
CREATE INDEX IF NOT EXISTS idx_criminals_suspicion_rate ON criminals(suspicion_rate);
CREATE INDEX IF NOT EXISTS idx_criminal_crimes_criminal_id ON criminal_crimes(criminal_id);
CREATE INDEX IF NOT EXISTS idx_case_files_criminal_id ON case_files(criminal_id);
CREATE INDEX IF NOT EXISTS idx_alerts_criminal_id ON alerts(criminal_id);
