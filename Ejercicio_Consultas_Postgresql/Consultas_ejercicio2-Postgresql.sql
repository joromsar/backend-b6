select film_id, title from film;
select * from film limit 5;
select * from film where film_id < 4;
select * from film where rating='PG' or rating='G';
select * from actor where first_name IN ('Angela', 'Angelina', 'Audrey' );
select * from actor where first_name ='Julia';
select * from actor where first_name ='Chris' or first_name ='Cameron' or first_name ='Cuba';
select * from customer where first_name ='Jamie' and last_name ='Rice';
select amount, payment_date from payment where amount <= 1;
select rental_duration from film;
select country_id, city from city;
select customer_id, return_date from rental order by return_date limit 3;
select count(*) from film where rating='NC-17' or rating='PG' or rating='PG-13' group by rating;
select count(customer_id) from rental;
select last_name from customer group by last_name having count(*)>1;
select film_id, actor_id from film_actor order by actor_id desc;
select actor_id, film_id from film_actor order by film_id desc;
select country_id, count(*) AS num_ciudades
from city
group by country_id
order by count(*) desc;
select rental_id, ROUND(avg(amount)::numeric, 2) as average_amount
from payment 
group by rental_id;
select concat(first_name, '', last_name) as full_name 
FROM ACTOR
order by length(concat(first_name, '', last_name)) desc
limit 10;