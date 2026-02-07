
-- Customers Module

CREATE TABLE CUSTOMERS(
    customer_id uuid primary key,
    first_name varchar(20),
    last_name varchar(30),
    cpf varchar(11),

    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE PHONE_NUMBERS (
    phone_id UUID PRIMARY KEY,
    customer_id UUID NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    type VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);

CREATE TABLE EMAILS (
    email_id UUID PRIMARY KEY,
    customer_id UUID NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);



CREATE TABLE VEHICLES (
    vehicle_id UUID PRIMARY KEY,
    customer_id UUID NOT NULL,
    model VARCHAR(255),
    plate VARCHAR(12) UNIQUE NOT NULL,
    total_value DECIMAL(12,2),
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);

-- Claims module

CREATE TABLE POLICIES (
    policy_id UUID PRIMARY KEY,
    customer_id UUID NOT NULL,
    status VARCHAR(30) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);

CREATE TABLE CLAIMS (
    claim_id UUID PRIMARY KEY,
    policy_id UUID NOT NULL,
    claim_type VARCHAR(50),
    description TEXT,
    status VARCHAR(30), 
    opened_at TIMESTAMP DEFAULT NOW(),
    closed_at TIMESTAMP,

    FOREIGN KEY (policy_id) REFERENCES POLICIES(policy_id)
);

-- Cover module

CREATE TABLE COVERS (
    cover_id UUID PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    max_value DECIMAL(12,2)
);

CREATE TABLE POLICY_COVERS (
    policy_cover_id UUID PRIMARY KEY,
    policy_id UUID NOT NULL,
    cover_id UUID NOT NULL,

    FOREIGN KEY (policy_id) REFERENCES POLICIES(policy_id),
    FOREIGN KEY (cover_id) REFERENCES COVERS(cover_id)
);

-- Finance module

CREATE TABLE PAYMENTS (
    payment_id UUID PRIMARY KEY,
    policy_id UUID NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    status VARCHAR(30),
    due_date DATE,
    paid_at TIMESTAMP,

    FOREIGN KEY (policy_id) REFERENCES POLICIES(policy_id)
);

