CREATE TABLE stars(star_name VARCHAR(32) NOT NULL, mass INTEGER, PRIMARY KEY (star_name));
CREATE TABLE planets(planet_name VARCHAR(32) NOT NULL, mass INTEGER,  PRIMARY KEY (planet_name), FOREIGN KEY (star_name) REFERENCES stars(star_name));