-- Revising Aggregations - The Count Function
select count(*) from city where population > 100000;

-- Revising Aggregations - The Sum Function
select sum(population) from city where district='california';

-- Revising Aggregations - Averages
select round(avg(population),3) from city where district = 'california';

-- Average Population
select round(avg(population),0) from city;

-- Japan Population
select sum(population) from city where countrycode = 'jpn';

-- Population Density Difference
select max(population) - min(population) from city;

-- Aggregation The Blunder
-- REPLACE() : used to remove 0 from salary.
-- AVG() : used to calculate average salary.
-- CEIL() : used to get next rounded integer.
select ceil(avg(salary)-avg(replace(salary, '0',''))) from employees;

-- Aggregation Top Earners
select max(salary*months), count(*) from employee group by (salary*months) order by (salary*months) desc limit 1;

-- Aggregation Weather Observation Station 2
select round(sum(LAT_N),2), round(sum(LONG_W),2) from station;

-- Aggregation Weather Observation Station 13
select round(sum(LAT_N), 4) from station where LAT_N > 38.788 and LAT_N < 137.2345;

-- Aggregation Weather Observation Station 14
select round(lat_n, 4) from station where lat_n < 137.2345 order by lat_n desc limit 1;

-- Aggregation Weather Observation Station 15
select round(long_w, 4) from station where lat_n<137.2345 order by lat_n desc limit 1;

-- Aggregation Weather Observation Station 16
select round(lat_n, 4) from station where lat_n > 38.7780 order by lat_n limit 1;

-- Aggregation Weather Observation Station 17
select round(long_w, 4) from station where lat_n > 38.7780 order by lat_n limit 1;

-- Aggregation Weather Observation Station 18
select round(abs(max(lat_n)-min(lat_n) + abs(max(long_w)-min(long_w))) ,4) from station;

-- Aggregation Weather Observation Station 19
select round(sqrt(power((min(lat_n) - max(lat_n)),2) + power((min(long_w) - max(long_w)),2)),4) from station;

-- 

