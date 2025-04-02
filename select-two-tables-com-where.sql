select * from `sakila`.`address`, `sakila`.`city`
where `sakila`.`address`.`city_id` 
= `sakila`.`city`.`city_id`;