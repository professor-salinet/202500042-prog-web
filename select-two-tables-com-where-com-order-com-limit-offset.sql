select * from `sakila`.`address`, `sakila`.`city`
where `sakila`.`address`.`city_id` 
= `sakila`.`city`.`city_id`
order by `sakila`.`address`.`address_id`
limit 5 
# limitar o a quantidade de linhas do resultado
offset 5;
# exibir a partir do registro n? 
# ou limitar a visualização do registros n?