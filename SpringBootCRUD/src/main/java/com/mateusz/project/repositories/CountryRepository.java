package com.mateusz.project.repositories;

import com.mateusz.project.entities.Country;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CountryRepository extends JpaRepository<Country, Integer>{

}
