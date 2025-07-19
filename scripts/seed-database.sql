-- Insert sample crime types
INSERT INTO crimes (name, category, severity_level, description, ipc_section) VALUES
('Theft', 'Property Crime', 3, 'Unlawful taking of someone else property', 'Section 378'),
('Fraud', 'Financial Crime', 4, 'Intentional deception for financial gain', 'Section 420'),
('Cybercrime', 'Technology Crime', 5, 'Criminal activities involving computers and internet', 'IT Act 2000'),
('Identity Theft', 'Financial Crime', 4, 'Unauthorized use of another person identity', 'Section 419'),
('Money Laundering', 'Financial Crime', 5, 'Process of making illegally obtained money appear legal', 'PMLA 2002'),
('Tax Evasion', 'Financial Crime', 4, 'Illegal practice of not paying taxes', 'Income Tax Act'),
('Drug Trafficking', 'Narcotics Crime', 5, 'Illegal trade involving controlled substances', 'NDPS Act'),
('Murder', 'Violent Crime', 5, 'Unlawful killing of another human being', 'Section 302'),
('Assault', 'Violent Crime', 3, 'Physical attack on another person', 'Section 351'),
('Robbery', 'Property Crime', 4, 'Taking property by force or threat', 'Section 390');

-- Insert sample criminals
INSERT INTO criminals (
    name, age, gender, location, address, phone, email, 
    father_name, mother_name, occupation, education, marital_status,
    height_cm, weight_kg, blood_group, identifying_marks,
    suspicion_rate, status, last_seen_date, last_seen_location
) VALUES
(
    'Aman Kumar Singh', 32, 'Male', 'Mumbai, Maharashtra', 
    'Flat 203, Shanti Nagar, Andheri East, Mumbai - 400069',
    '+91-9876543210', 'aman.singh@email.com',
    'Rajesh Kumar Singh', 'Sunita Singh', 'Software Engineer', 'B.Tech Computer Science',
    'Married', 175, 70, 'B+', 'Scar on left hand, tattoo on right arm',
    85, 'Wanted', '2024-01-15', 'Bandra Railway Station, Mumbai'
),
(
    'Rekha Sharma', 28, 'Female', 'Delhi, NCR',
    'House No. 45, Sector 12, Dwarka, New Delhi - 110075',
    '+91-9876543211', 'rekha.sharma@email.com',
    'Mohan Sharma', 'Kamala Sharma', 'Accountant', 'M.Com',
    'Single', 162, 55, 'A+', 'Mole on right cheek',
    92, 'Under Investigation', '2024-01-10', 'Connaught Place, Delhi'
),
(
    'Piyush Agarwal', 35, 'Male', 'Bangalore, Karnataka',
    'Villa 12, Whitefield, Bangalore - 560066',
    '+91-9876543212', 'piyush.agarwal@email.com',
    'Suresh Agarwal', 'Meera Agarwal', 'Business Owner', 'MBA Finance',
    'Married', 180, 80, 'O+', 'Gold tooth, distinctive voice',
    78, 'Arrested', '2024-01-08', 'Electronic City, Bangalore'
),
(
    'Aman Verma', 29, 'Male', 'Pune, Maharashtra',
    'Apartment 501, Koregaon Park, Pune - 411001',
    '+91-9876543213', 'aman.verma@email.com',
    'Vinod Verma', 'Priya Verma', 'Unemployed', '12th Pass',
    'Single', 170, 65, 'AB+', 'Tattoo on neck, pierced ear',
    95, 'Wanted', '2024-01-12', 'Pune Railway Station'
),
(
    'Priya Patel', 26, 'Female', 'Ahmedabad, Gujarat',
    'Bungalow 8, Satellite Area, Ahmedabad - 380015',
    '+91-9876543214', 'priya.patel@email.com',
    'Kiran Patel', 'Nisha Patel', 'Teacher', 'B.Ed',
    'Married', 158, 50, 'B-', 'Birthmark on forehead',
    65, 'Under Investigation', '2024-01-05', 'Mahatma Gandhi Road, Ahmedabad'
),
(
    'Rohit Gupta', 31, 'Male', 'Kolkata, West Bengal',
    'Flat 15B, Salt Lake City, Kolkata - 700064',
    '+91-9876543215', 'rohit.gupta@email.com',
    'Ashok Gupta', 'Sita Gupta', 'Shopkeeper', 'B.Com',
    'Married', 168, 72, 'A-', 'Limp in left leg',
    88, 'Wanted', '2024-01-18', 'Howrah Bridge, Kolkata'
);

-- Link criminals with crimes
INSERT INTO criminal_crimes (criminal_id, crime_id, case_number, fir_number, police_station, date_of_crime, location_of_crime, status, description) VALUES
(1, 1, 'CASE001', 'FIR/2024/001', 'Andheri Police Station', '2024-01-10', 'Andheri Market, Mumbai', 'Under Investigation', 'Theft of electronic goods worth 2 lakhs'),
(1, 2, 'CASE002', 'FIR/2024/002', 'Bandra Police Station', '2024-01-12', 'Bandra West, Mumbai', 'Under Investigation', 'Credit card fraud involving multiple victims'),
(2, 3, 'CASE003', 'FIR/2024/003', 'Cyber Crime Cell Delhi', '2024-01-08', 'Online', 'Active', 'Phishing scam targeting bank customers'),
(2, 4, 'CASE004', 'FIR/2024/004', 'Dwarka Police Station', '2024-01-09', 'Dwarka, Delhi', 'Under Investigation', 'Identity theft for loan fraud'),
(3, 5, 'CASE005', 'FIR/2024/005', 'Economic Offences Wing', '2024-01-05', 'Bangalore', 'Closed', 'Money laundering through shell companies'),
(3, 6, 'CASE006', 'FIR/2024/006', 'Income Tax Department', '2024-01-06', 'Bangalore', 'Under Investigation', 'Tax evasion of 50 crores'),
(4, 7, 'CASE007', 'FIR/2024/007', 'Pune Police Station', '2024-01-11', 'Koregaon Park, Pune', 'Active', 'Drug trafficking network'),
(5, 2, 'CASE008', 'FIR/2024/008', 'Satellite Police Station', '2024-01-04', 'Ahmedabad', 'Under Investigation', 'Educational certificate fraud'),
(6, 1, 'CASE009', 'FIR/2024/009', 'Salt Lake Police Station', '2024-01-17', 'Salt Lake City, Kolkata', 'Active', 'Theft from residential area'),
(6, 9, 'CASE010', 'FIR/2024/010', 'Howrah Police Station', '2024-01-18', 'Howrah, Kolkata', 'Under Investigation', 'Assault on shopkeeper');

-- Insert sample case files
INSERT INTO case_files (criminal_id, case_number, title, description, investigating_officer, court_name, case_status, filing_date) VALUES
(1, 'CASE001', 'State vs Aman Kumar Singh - Theft', 'Case involving theft of electronic goods', 'Inspector Rajesh Kumar', 'Andheri Metropolitan Court', 'Open', '2024-01-11'),
(2, 'CASE003', 'State vs Rekha Sharma - Cybercrime', 'Phishing and identity theft case', 'Inspector Priya Mehta', 'Patiala House Court', 'Open', '2024-01-09'),
(3, 'CASE005', 'State vs Piyush Agarwal - Money Laundering', 'Financial fraud and money laundering', 'Inspector Suresh Reddy', 'Bangalore City Court', 'Closed', '2024-01-06'),
(4, 'CASE007', 'State vs Aman Verma - Drug Trafficking', 'Drug trafficking and distribution', 'Inspector Vikram Singh', 'Pune Sessions Court', 'Open', '2024-01-12');

-- Insert sample alerts
INSERT INTO alerts (criminal_id, alert_type, title, description, priority_level, status, created_by) VALUES
(1, 'Movement Alert', 'Aman Kumar Singh spotted', 'Suspect spotted near Bandra Railway Station', 5, 'Active', 1),
(2, 'Financial Alert', 'Suspicious transaction detected', 'Large cash withdrawal from ATM in CP area', 4, 'Active', 1),
(4, 'High Priority Alert', 'Drug trafficking suspect active', 'Aman Verma suspected to be planning major drug deal', 5, 'Active', 1);

-- Insert sample users (officers)
INSERT INTO users (email, password_hash, officer_id, full_name, department, rank) VALUES
('officer1@bharatlens.gov.in', '$2b$10$example_hash_1', 'OFF001', 'Inspector Rajesh Kumar', 'Mumbai Police', 'Inspector'),
('officer2@bharatlens.gov.in', '$2b$10$example_hash_2', 'OFF002', 'Inspector Priya Mehta', 'Delhi Police', 'Inspector'),
('officer3@bharatlens.gov.in', '$2b$10$example_hash_3', 'OFF003', 'Inspector Suresh Reddy', 'Bangalore Police', 'Inspector'),
('admin@bharatlens.gov.in', '$2b$10$example_hash_admin', 'ADM001', 'Superintendent Vikram Singh', 'Central Bureau', 'Superintendent');
