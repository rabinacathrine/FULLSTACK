package com.prograd.progradproject.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prograd.progradproject.model.Prograd;

@Repository
public interface ProgradRepository extends JpaRepository<Prograd, Long>{

	List<Prograd> findAll();
}
