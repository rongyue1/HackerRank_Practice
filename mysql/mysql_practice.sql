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
